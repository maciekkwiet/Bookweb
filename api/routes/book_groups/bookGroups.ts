import { Request, Response } from 'express';
import { UserInfoRequest } from '../../types/requests';
import pool from '../../configDB/config';

export const getBookGroups = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    const {
      rows,
    } = await pool.query('SELECT * FROM book_groups WHERE (is_public=TRUE) OR (user_id=$1) ORDER BY id ASC', [userId]);
    response.status(200).json(rows);
  } catch (err) {
    response.status(500).json(err);
  }
};
