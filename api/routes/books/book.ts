import { Request, Response } from 'express';
import { getConnection, ILike } from 'typeorm';

import { Book } from '../../models';
import { uploadImage } from '../../utils/imageTools';
import validateEntity from '../../helpers/validateEntity';

export const getBooks = async (request: Request, response: Response) => {
  const books = await Book.find({
    relations: ['authors', 'reviews', 'categories'],
  });
  return response.status(200).send(books);
};

export const getBookById = async (request: Request, response: Response) => {
  const id = request.params.id;
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

//zadanie z gwiazdką
export const getTopBooks = async (request: Request, response: Response) => {
  const topBooks = await getConnection().createQueryBuilder().select('book');
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
  const { isbn, title, description, releaseDate, numberOfPages, authorId, category, removeCategory } = request.body;
  const id = request.params.id;
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
  if (category) book.categories.push(category);
  if (authorId) book.authors.push(authorId);

  if (removeCategory) book.categories.splice(book.categories.indexOf(category), 1);

  validateEntity(book);

  await book.save();

  return response.status(200).send({
    message: `Book has been updated..`,
    book,
  });
};

export const deleteBook = async (request: Request, response: Response) => {
  const id = request.params.id;
  const book = await Book.findOneOrFail(id);

  await book.remove();

  return response.status(200).send({
    message: 'Book has been deleted',
  });
};

export const getAverageRatingByBookId = async (request: Request, response: Response) => {
  const id = request.params.id;
  const book = await Book.findOneOrFail({
    where: {
      id: id,
    },
    relations: ['reviews'],
  });
  const averageRating = book.reviews.reduce((acc, book) => acc + book.rating, 0) / book.reviews.length;

  return response.status(200).send({
    averageRating,
  });
};
