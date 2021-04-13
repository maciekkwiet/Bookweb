
import pool from '../../configDB/config';
import { Request, Response } from 'express';
import { uploadImage } from '../../utils/imageTools';

export const getBooks = async (request: Request, response: Response) => {
  pool.query('SELECT * FROM books ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getBookAuthors = async (request: Request, response: Response) => {
  const bookId = parseInt(request.params.id);

  pool.query(
    `
    SELECT a.id, a.name, a.surname FROM authors AS a 
    LEFT JOIN authors_books AS ab ON ab.author_id = a.id 
    WHERE ab.book_id = $1;`,
    [bookId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    },
  );
};

export const getBookReviews = async (request: Request, response: Response) => {
  const bookId = parseInt(request.params.id);

  pool.query(
    `
    SELECT * FROM reviews WHERE book_id = $1;`,
    [bookId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    },
  );
};

export const getTopBooks = async (request: Request, response: Response) => {
  pool.query(
    `
  SELECT b.id, b.title, r.rating, b.cover FROM books AS b RIGHT JOIN (
    SELECT book_id, AVG(score) as rating FROM reviews GROUP BY book_id ORDER BY rating DESC LIMIT 6
  ) AS r ON r.book_id = b.id ORDER BY r.rating DESC;
`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    },
  );
};

export const getBookById = async (request: Request, response: Response) => {
  const bookId = parseInt(request.params.id);

  pool.query('SELECT * FROM books WHERE id = $1', [bookId], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const createBook = async (request: Request, response: Response) => {
  const { isbn, title, description, release_date, num_pages, cover } = request.body;
  const image = await uploadImage(cover);

  pool.query(
    'INSERT INTO books ( isbn, title, description, release_date, num_pages, cover ) VALUES ($1, $2, $3, $4, $5, $6)',
    [isbn, title, description, release_date, num_pages, image],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Book added`);
    },
  );
};

export const updateBook = async (request: Request, response: Response) => {
  const bookId = parseInt(request.params.id);
  const { isbn, title, description, release_date, num_pages, cover } = request.body;
  const image = await uploadImage(cover);

  pool.query(
    'UPDATE books SET isbn = $1, title = $2, description = $3, release_date = $4, num_pages = $5, cover = $6 WHERE id = $7',
    [isbn, title, description, release_date, num_pages, image, bookId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Book modified`);
    },
  );
};

export const deleteBook = async (request: Request, response: Response) => {
  const bookId = parseInt(request.params.id);

  pool.query('DELETE FROM books WHERE id = $1', [bookId], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Book deleted`);
  });
};

module.exports = {
  getBooks,
  getTopBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBookAuthors,
  getBookReviews,
};