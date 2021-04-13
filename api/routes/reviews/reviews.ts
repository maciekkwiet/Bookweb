import pool from '../../configDB/config';
import { Request, Response } from 'express';
import { UserInfoRequest } from '../../types/requests';

export const getReviews = (request: Request, response: Response) => {
  pool.query('SELECT * FROM reviews', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getReviewById = (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM reviews WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const createReview = (request: UserInfoRequest, response: Response) => {
  const { header, content, score, added_at, book_id, user_id } = request.body;

  pool.query(
    'INSERT INTO reviews (header, content, score, added_at, user_id, book_id) VALUES ($1, $2, $3, $4, $5, $6)',
    [header, content, score, added_at, user_id, book_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Reviev added`);
    },
  );
};

export const updateReview = (request: UserInfoRequest, response: Response) => {
  const id = parseInt(request.params.id);
  const { header, content, score, added_at } = request.body;
  pool.query(
    'UPDATE review SET header = $1, content= $2, score = $3 created_at = $4',
    [header, content, score, added_at],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Review modified`);
    },
  );
};

export const deleteReview = (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM reviews WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Review deleted`);
  });
};

module.exports = {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
