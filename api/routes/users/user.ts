import { Request, Response } from 'express';
import pool from '../../configDB/config';
const bcrypt = require('bcrypt');
const jwtGenerator = require('../../utils/jwtGenerator');
const { validationResult } = require('express-validator');
import { uploadImage } from '../../utils/imageTools';

//Funkcja którą można by wynieść i używać do wyszukiwania po ID - nie wiem jak z obsługą błędów - może za pomocą try/catch
const getById = async (table: string, id: number) => {
  let rows: object[] = [];
  await pool
    .query(`SELECT * FROM ${table} WHERE ID = $1`, [id])
    .then(results => {
      rows = results.rows;
    })
    .catch(error => {
      throw new Error(error);
    });

  return rows;
};
//

//ROUTES

export const getAllUsers = async (req: Request, res: Response) => {
  await pool
    .query('SELECT * FROM users ORDER BY id ASC')
    .then(results => res.status(200).json(results.rows))
    .catch(error => res.status(500).json(error.message));
};

export const getUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await getById('users', id);

  if (user.length === 0) return res.status(400).json("User with given ID doesn't exist");

  res.status(200).json(user);
};

export const removeUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await getById('users', id);

  if (user.length === 0) return res.status(400).json("User with given ID doesn't exist");

  pool.query('DELETE FROM users where id = $1', [id]).then(() => {
    res.status(200).json({
      message: 'User deleted',
      user,
    });
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { email, password, name, surname, avatar } = req.body;
  const avatarImage = await uploadImage(avatar);

  let user = await getById('users', id);
  if (user.length === 0) return res.status(400).json("User with given ID doesn't exist");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  pool
    .query('UPDATE users SET email = $1, password = $2, name = $3, surname = $4, avatar = $5 WHERE id = $6', [
      email,
      hashedPassword,
      name,
      surname,
      avatarImage,
      id,
    ])
    .then(async () => {
      user = await getById('users', id);
      res.status(200).json({ message: 'User updated', user });
    });
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    //1. destructure the req.body (name, email, password)
    const { name, email, password } = req.body;

    //2. check if user exist (if user exist then throw error)
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length !== 0) {
      return res.status(401).send('User already exist');
    }

    //3. Bcrypt the user password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    //4. enter the new user inside our db
    const newUser = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [
      name,
      email,
      bcryptPassword,
    ]);
    newUser.rows[0].token = jwtGenerator(newUser.rows[0].id);

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

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
