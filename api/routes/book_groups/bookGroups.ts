import { request, Response } from 'express';
import { UserInfoRequest } from '../../types/requests';
import pool from '../../configDB/config';

export const getBookGroups = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    console.log(userId);
    const {
      rows,
    } = await pool.query('SELECT * FROM book_groups WHERE (is_public=TRUE) OR (user_id=$1) ORDER BY id ASC', [userId]);
    response.status(200).json(rows);
  } catch (err) {
    response.status(500).json(err);
  }
};

export const getBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    const bookGroupId = parseInt(request.params.id);
    const {
      rows,
    } = await pool.query(
      'SELECT * FROM book_groups WHERE (id=$1) AND ((is_public=TRUE) OR (user_id=$2)) ORDER BY id ASC',
      [bookGroupId, userId]
    );
    response.status(200).json(rows);
  } catch (err) {
    response.status(500).json(err);
  }
};
