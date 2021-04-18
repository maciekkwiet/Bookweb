import pool from '../../configDB/config';
import { Request, Response } from 'express';
import { uploadImage } from '../../utils/imageTools';
import { Book } from '../../models';
import { ILike } from 'typeorm';
import validateEntity from '../../helpers/validateEntity';

export const getBooks = async (request: Request, response: Response) => {
  const books = await Book.find({
    relations: ['authors', 'reviews', 'categories'],
  });
  return response.json(books);
};

export const getBookById = async (request: Request, response: Response) => {
  const id = request.params;
  const book = await Book.findOneOrFail({
    relations: ['authors', 'reviews', 'categories'],
    where: id,
  });

  return response.status(200).send(book);
};

export const getBookByTitle = async (request: Request, response: Response) => {
  const { title } = request.body;

  const books = await Book.find({
    where: {
      title: ILike(title),
    },
  });

  return response.status(200).send({
    books,
  });
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

export const createBook = async (request: Request, response: Response) => {
  const { isbn, title, authorId, description, releaseDate, numberOfPages, cover } = request.body;

  const book = new Book();

  book.isbn = isbn;
  book.title = title;
  book.description = description;
  book.releaseDate = releaseDate;
  book.numberOfPages = numberOfPages;
  book.cover = cover;
  if (authorId) book.authors.push(authorId);

  validateEntity(book);

  await book.save();

  response.status(201).send({
    message: 'Book added',
    book,
  });
};

export const updateBook = async (request: Request, response: Response) => {
  const { isbn, title, description, releaseDate, numberOfPages, authorId } = request.body;
  const id = request.params;
  let { cover } = request.body;

  if (cover) {
    cover = await uploadImage(cover);
  }

  const book = await Book.findOneOrFail(id);

  if (isbn) book.isbn = isbn;
  if (title) book.title = title;
  if (description) book.description = description;
  if (isbn) book.releaseDate = releaseDate;
  if (isbn) book.numberOfPages = numberOfPages;
  if (authorId) book.authors.push(authorId);

  validateEntity(book);

  await book.save();

  return response.status(200).send({
    message: `Book has been updated..`,
    book,
  });
};

export const deleteBook = async (request: Request, response: Response) => {
  const id = request.params;
  const book = await Book.findOneOrFail(id);

  await book.remove();

  return response.status(200).send({
    message: 'Book has been deleted',
  });
};

export const getAverageRatingByBookId = async (request: Request, response: Response) => {
  const id = request.params;
  const book = await Book.findOneOrFail(id);
  const averageRating = book.reviews.reduce((acc, book) => acc + book.rating, 0) / book.reviews.length;

  return response.status(200).send({
    averageRating,
  });
};

module.exports = {
  getBooks,
  getTopBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBookByTitle,
  getAverageRatingByBookId,
};
