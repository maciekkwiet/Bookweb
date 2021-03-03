import { Request, Response } from 'express';
import pool from '../../configDB/config';

export const getBookGroups = async (req: Request, res: Response) => {
  await pool
    .query('SELECT * FROM book_groups WHERE is_public=TRUE ORDER BY id ASC')
    .then(results => res.status(200).json(results.rows))
    .catch(error => res.status(500).json(error.message));
};
