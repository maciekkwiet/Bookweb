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
  // const userId: number = request.userId;
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

export const getAllReviewsByBookId = (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'SELECT r.id review_id, r.content, r.score, r.added_at, r.user_id, r.book_id, u.id user_id, u.name, u.surname, u.avatar FROM reviews r INNER JOIN users u ON r.user_id = u.id WHERE book_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    },
  );
};

// 'SELECT b.id book_id, b.isbn, b.title, b.release_date, b.num_pages, b.cover, b.description, a.id author_id, a.name, a.surname FROM books b INNER JOIN authors_books c ON b.id = c.book_id INNER JOIN authors a ON a.id=c.author_id WHERE book_id = $1',
module.exports = {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  getAllReviewsByBookId,
};
