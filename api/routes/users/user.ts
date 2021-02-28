import pool from '../../configDB/config';
const bcrypt = require('bcrypt');

export const getAllUsers = (req: any, res: any) => {
  pool
    .query('SELECT * FROM users ORDER BY id ASC')
    .then(results => res.status(200).json(results.rows))
    .catch(error => res.status(500).json(error.message));
};

export const getUser = (req: any, res: any) => {
  pool
    .query('SELECT * FROM users WHERE id = $1', [req.params.id])
    .then(results => {
      if (results.rows.length === 0) return res.status(400).send("User with given ID doesn't exist");

      res.status(200).json(results.rows);
    })
    .catch(error => res.status(500).json(error.message));
};

export const removeUser = (req: any, res: any) => {
  pool
    .query('DELETE FROM users where id = $1', [req.params.id])
    .then(results => {
      if (results.rows.length === 0) return res.status(400).send("User with given ID doesn't exist");

      res.status(200).json('User deleted');
    })
    .catch(error => res.status(500).json(error.message));
};

export const updateUser = async (req: any, res: any) => {
  const { id } = req.params;
  const { email, password, name, surname, avatar } = req.body;

  await pool
    .query('SELECT * FROM users WHERE id = $1', [id])
    .then(results => {
      if (results.rows.length === 0) return res.status(400).send("User with given ID doesn't exist");
    })
    .catch(error => res.status(500).json(error.message));

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
    .then(results => res.status(200).json('User updated..'))
    .catch(error => res.status(500).json(error.message));
};
