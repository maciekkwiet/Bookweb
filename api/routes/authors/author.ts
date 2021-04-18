import { Request, Response } from 'express';

import { Author } from '../../models';
import validateEntity from '../../helpers/validateEntity';
import { Like } from 'typeorm';

export const getAuthors = async (request: Request, response: Response) => {
  const authors = await Author.find();

  return response.status(200).send(authors);
};

export const getAuthorById = async (request: Request, response: Response) => {
  const id = request.params;

  const author = await Author.findOneOrFail(id);

  return response.status(200).send({
    author,
  });
};

export async function getAuthorsBySurname(request: Request, response: Response) {
  const { surname } = request.params;

  const author = await Author.find({
    where: {
      surname: surname,
    },
  });

  return response.status(200).send({
    author,
  });
}

export const getBooksByAuthorId = async (request: Request, response: Response) => {
  const id = request.params;

  const author = await Author.findOneOrFail({
    where: id,
    relations: ['books'],
  });

  const { books } = author;

  return response.status(200).send({
    books,
  });
};

export const createAuthor = async (request: Request, response: Response) => {
  const { name, surname, description } = request.body;

  const author = new Author();
  author.name = name;
  author.surname = surname;
  author.description = description;

  await validateEntity(author);

  await author.save();

  return response.status(201).send({
    message: 'Author added..',
    author,
  });
};

export const updateAuthor = async (request: Request, response: Response) => {
  const id = request.params;
  const { name, surname, description } = request.body;

  const author = await Author.findOneOrFail(id);

  if (name) author.name = name;
  if (surname) author.surname = surname;
  if (description) author.description = description;

  validateEntity(author);

  await author.save().then();

  return response.status(200).send({
    author,
  });
};

export const deleteAuthor = async (request: Request, response: Response) => {
  const id = request.params;

  const author = await Author.findOneOrFail(id);
  author.remove();

  return response.status(200).send({
    message: `Author ${author.name} ${author.surname} has been deleted`,
  });
};

//module.exports
