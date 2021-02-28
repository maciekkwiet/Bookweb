import pool from '../../configDB/config';

export const getAllUsers = (req: any, res: any) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).json(results.rows);
    }
  });
};

export const getUser = (req: any, res: any) => {
  const id = req.params.id;

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      res.status(400).send(error.message);
    }
    if (results.rows.length === 0) return res.status(400).send("User with given ID doesn't exist");

    res.status(200).json(results.rows);
  });
};
//id, email, password, name, surname, avatar
export const addUser = (req: any, res: any) => {
  const { email, password, name, surname, avatar } = req.body;

  pool.query(
    'INSERT INTO users (email, password, name, surname, avatar) values ($1, $2, $3, $4, $5)',
    [email, password, name, surname, avatar],
    (error, results) => {
      if (!password || !email) return res.status(400).send(`Email and password are required fields.`);
      if (error) {
        res.status(400).json(error.message);
      } else {
        res.status(201).json('User Added');
      }
    }
  );
};

export const removeUser = (req: any, res: any) => {
  const id = req.params.id;

  pool.query('DELETE FROM users where id = $1', [id], (error, results) => {
    if (!id) return res.status(400).send("User with given ID doesn't exist");
    if (error) return res.status(500).json(error.message);

    res.status(200).json('User deleted');
  });
};

export const updateUser = (req: any, res: any) => {
  const id = req.params.id;
  const { email, password, name, surname, avatar } = req.body;

  pool.query(
    'UPDATE users SET email = $1, password = $2, name = $3, surname = $4, avatar = $5 WHERE id = $6',
    [email, password, name, surname, avatar, id],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      } else {
        res.status(200).json({
          message: 'User updated',
          user: results.fields,
        });
      }
    }
  );
};
