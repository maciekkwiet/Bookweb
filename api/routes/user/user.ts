import pool from '../../configDB/config';
import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const jwtGenerator = require('../../utils/jwtGenerator');
const { validationResult } = require('express-validator');

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
    res.json(newUser.rows[0]);

    //5. generating our jwt token
    const token = jwtGenerator(newUser.rows[0].id);
    res.json({ token });
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

module.exports = {
  registerUser,
  loginUser,
};
