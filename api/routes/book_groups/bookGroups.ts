import { Response } from 'express';
import { UserInfoRequest } from '../../types/requests';
import pool from '../../configDB/config';

export const getBookGroups = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    console.log(userId);
    const {
      rows,
    } = await pool.query('SELECT * FROM book_groups WHERE (is_public=TRUE) OR (user_id=$1) ORDER BY id ASC', [userId]);
    if (rows.length > 0) {
      response.status(200).json(rows);
    } else {
      response.status(404).json({ msg: 'There is no book groups for you' });
    }
  } catch (err) {
    response.status(500).json(err);
  }
};

export const getBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    const bookGroupId = parseInt(request.params.id);
    const { rows } = await pool.query(
      'SELECT * FROM book_groups WHERE (id=$1) AND ((is_public=TRUE) OR (user_id=$2))',
      [bookGroupId, userId]
    );
    if (rows.length <= 0) {
      response.status(403).json({ error: "You don't have permission to this resource or it doesn't exists" });
    } else {
      response.status(200).json(rows);
    }
  } catch (err) {
    response.status(500).json(err);
  }
};

export const createBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    const { is_public, name } = request.body;
    await pool.query('INSERT INTO book_groups (is_public, user_id, name) VALUES ($1, $2, $3)', [
      is_public,
      userId,
      name,
    ]);
    response.status(201).send('Book group added');
  } catch (err) {
    response.status(500).json(err);
  }
};

export const deleteBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    const bookGroupId = parseInt(request.params.id);
    await pool.query('DELETE FROM book_groups WHERE (id=$1) AND (user_id=$2)', [bookGroupId, userId]);
    response.status(201).send('Book group deleted');
  } catch (err) {
    response.status(500).json(err);
  }
};
