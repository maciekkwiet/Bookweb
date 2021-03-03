import pool from '../../configDB/config';
import { Request, Response } from 'express';

export const getAuthors = async (request: Request, response: Response) => {
  pool.query('SELECT * FROM authors ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getAuthorById = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM authors WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getBooksByAuthorId = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query(
    'SELECT books.id, books.title FROM books INNER JOIN authors_books  ON books.id = authors_books.book_id WHERE authors_books.author_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

export const createAuthor = async (request: Request, response: Response) => {
  const { name, surname, description } = request.body;

  pool.query(
    'INSERT INTO authors (name, surname, description) VALUES ($1, $2, $3)',
    [name, surname, description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Author added`);
    }
  );
};

export const updateAuthor = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const { name, surname, description } = request.body;

  pool.query(
    'UPDATE authors SET name = $1, surname = $2, description = $3 WHERE id = $4',
    [name, surname, description, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Author modified`);
    }
  );
};

export const deleteAuthor = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM authors WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Author deleted`);
  });
};

module.exports = {
  getAuthors,
  getAuthorById,
  getBooksByAuthorId,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
