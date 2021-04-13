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

export const getBookById = async (request: Request, response: Response, id: number) => {
  const bookId = id ?? parseInt(request.params.id);

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

export const getBooksWithAuthor = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  pool.query(
    'SELECT b.id book_id, b.isbn, b.title, b.release_date, b.num_pages, b.cover, b.description, a.id author_id, a.name, a.surname FROM books b INNER JOIN authors_books c ON b.id = c.book_id INNER JOIN authors a ON a.id=c.author_id WHERE book_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length) {
        response.status(200).json(results.rows);
      } else {
        getBookById(request, response, id);
      }
    },
  );
};

export const getBooksWithoutAuthor = async (id: any) => {
  pool.query(
    'SELECT b.id book_id, b.isbn, b.title, b.release_date, b.num_pages, b.cover, b.description, a.id author_id, a.name, a.surname FROM books b INNER JOIN authors_books c ON b.id = c.book_id WHERE book_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      return results;
    },
  );
};

export const getScoreByBookId = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  pool.query(
    'SELECT b.id, r.rating FROM books AS b RIGHT JOIN (SELECT book_id, AVG(score) as rating FROM reviews GROUP BY book_id) AS r ON r.book_id = b.id WHERE b.id = $1',
    [id],
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
    SELECT book_id, AVG(score) as rating FROM reviews GROUP BY book_id ORDER BY rating DESC LIMIT 3
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

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksWithAuthor,
  getScoreByBookId,
  getTopBooks,
};
