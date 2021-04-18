import { Request, Response } from 'express';

const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

import pool from '../../configDB/config';
import validateEntity from '../../helpers/validateEntity';
import { uploadImage } from '../../utils/imageTools';
import { User } from '../../models';
const jwtGenerator = require('../../utils/jwtGenerator');

export const getAllUsers = async (request: Request, response: Response) => {
  const users = await User.find({
    select: ['id', 'name', 'email', 'avatar'],
  });

  return response.status(200).send(users);
};

export const getUser = async (request: Request, response: Response) => {
  const id = request.params.id;

  const user = await User.findOneOrFail({
    where: { id },
    relations: ['books', 'reviews'],
    select: ['id', 'name', 'email', 'avatar'],
  });

  return response.status(200).send({
    user,
  });
};

export const removeUser = async (request: Request, response: Response) => {
  const id = request.params.id;
  const user = await User.findOneOrFail(id);

  await user.remove();

  return response.status(200).send({
    message: `User with email: ${user.email} has been deleted`,
  });
};

export const updateUser = async (request: Request, response: Response) => {
  const id = request.params.id;
  const { name, email, password, avatar } = request.body;

  const user = await User.findOneOrFail(id);

  if (name) user.name = name;
  if (email) user.email = email;
  if (avatar) {
    const avatarImage = await uploadImage(avatar);
    user.avatar = avatarImage;
  }
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
  }

  await validateEntity(user);

  await user.save();

  //user zwracany wraz z hasłem w celach testowych - do usunięcia
  return response.status(200).send({
    message: 'User updated',
    user: user,
  });
};

export const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const { name, email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (user) {
    return res.status(401).send('User already exist');
  }

  const salt = await bcrypt.genSalt(10);
  const bcryptPassword = await bcrypt.hash(password, salt);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = bcryptPassword;

  await newUser.save();

  const filter = (user: User) => {
    const { name, email } = newUser;
    return { name, email };
  };

  res.status(201).send({
    message: 'User created',
    user: filter(newUser),
  });
};

//todo
export const loginUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    //1. destructure the req.body
    const { email, password } = req.body;

    //2. check if user doesn't exist (if ! then throw error)
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(401).json('Incorrect password or email!');
    }

    //3. check if incoming password == db password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json('Incorrect password or email!');
    }

    //4. give them the jwt token
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
