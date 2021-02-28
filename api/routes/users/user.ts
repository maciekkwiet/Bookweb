import { Request, Response } from 'express';
import pool from '../../configDB/config';
const bcrypt = require('bcrypt');

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

  try {
    const user = await getById('users', id);
    if (user.length === 0) return res.status(400).json("User with given ID doesn't exist");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const removeUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const user = await getById('users', id);
    if (user.length === 0) return res.status(400).json("User with given ID doesn't exist");

    pool.query('DELETE FROM users where id = $1', [id]).then(() => {
      res.status(200).json({
        message: 'User deleted',
        user,
      });
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { email, password, name, surname, avatar } = req.body;

  try {
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
        avatar,
        id,
      ])
      .then(async () => {
        user = await getById('users', id);
        res.status(200).json({ message: 'User updated', user });
      });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
