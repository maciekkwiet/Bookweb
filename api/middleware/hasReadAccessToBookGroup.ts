import { Response, NextFunction } from 'express';
import { UserInfoRequest } from '../types/requests';
import pool from '../configDB/config';

export default async (request: UserInfoRequest, response: Response, next: NextFunction) => {
  const userId: number = request.userId;
  const bookGroupId: number = parseInt(request.params.id);
  const { rows } = await pool.query('SELECT * FROM book_groups WHERE (id=$1) AND ((is_public=TRUE) OR (user_id=$2))', [
    bookGroupId,
    userId,
  ]);
  if (rows.length <= 0) {
    response.status(403).json({ error: "You don't have permission to this resource or it doesn't exists" });
  } else {
    next();
  }
};
