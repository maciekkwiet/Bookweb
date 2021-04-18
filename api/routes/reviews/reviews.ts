import pool from '../../configDB/config';
import { Request, Response } from 'express';
import { UserInfoRequest } from '../../types/requests';
import { Book, Review, User } from '../../models';
import validateEntity from '../../helpers/validateEntity';

export const getReviews = async (request: Request, response: Response) => {
  const reviews = await Review.find();

  return response.status(200).send({
    reviews,
  });
};

export const getReviewById = async (request: Request, response: Response) => {
  const id = request.params.id;

  const review = await Review.findOneOrFail(id);

  return response.status(200).send({
    review,
  });
};

export const createReview = async (request: UserInfoRequest, response: Response) => {
  const { textContent, rating, bookId, userId } = request.body;

  const user: User = await User.findOneOrFail(userId);
  const book: Book = await Book.findOneOrFail(bookId);

  const review = new Review();

  review.rating = rating;
  review.textContent = textContent;

  review.book = book;
  review.user = user;

  await validateEntity(review);

  await review.save();
  return response.status(201).send({
    message: 'Review created',
    review,
  });
};

export const updateReview = async (request: UserInfoRequest, response: Response) => {
  const id = request.params.id;
  const { textContent, rating } = request.body;

  const review = await Review.findOneOrFail(id);

  if (textContent) review.textContent = textContent;
  if (rating) review.rating = rating;

  await validateEntity(review);

  await review.save();

  return response.status(204).send({
    message: 'Review has been updated..',
  });
};

export const deleteReview = async (request: Request, response: Response) => {
  const id = request.params.id;
  const review = await Review.findOneOrFail(id);

  await review.remove();

  return response.status(204).send({
    message: 'Review has been deleted..',
  });
};

module.exports = {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  // getAllReviewsByBookId,
};
