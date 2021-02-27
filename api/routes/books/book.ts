import pool from '../../configDB/config';
import { Request, Response } from 'express';

export const getBooks = (request: Request, response: Response) => {
  pool.query('SELECT * FROM books ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getBookById = (request: Request, response: Response) => {
  const bookId = parseInt(request.params.id);

  pool.query('SELECT * FROM books WHERE id = $1', [bookId], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getBookByISBN = (request: Request, response: Response) => {
  const bookISBN = parseInt(request.params.isbn);

  pool.query('SELECT * FROM books WHERE isbn = $1', [bookISBN], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getBookByTitle = (request: Request, response: Response) => {
  const bookTitle = parseInt(request.params.title);

  pool.query('SELECT * FROM books WHERE title = $1', [bookTitle], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const createBook = (request: Request, response: Response) => {
  const { isbn, title, description, release_date, num_pages, cover } = request.body;

  pool.query(
    'INSERT INTO books ( isbn, title, description, release_date, num_pages, cover ) VALUES ($1, $2, $3, $4, $5, $6)',
    [isbn, title, description, release_date, num_pages, cover],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Book added`);
    }
  );
};

export const updateBook = (request: Request, response: Response) => {
  const bookId = parseInt(request.params.id);
  const { isbn, title, description, release_date, num_pages, cover } = request.body;

  pool.query(
    'UPDATE books SET isbn = $1, title = $2, description = $3, release_date = $4, num_pages = $5, cover = $6 WHERE id = $7',
    [isbn, title, description, release_date, num_pages, cover, bookId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Book modified`);
    }
  );
};

export const deleteBook = (request: Request, response: Response) => {
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
  getBookById,
  getBookByISBN,
  getBookByTitle,
  createBook,
  updateBook,
  deleteBook,
};
