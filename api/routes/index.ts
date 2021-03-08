import { Express } from 'express';

const bookRoutes = require('./books/bookRoutes');
const userRoutes = require('./users/userRoutes');
const authorsRoutes = require('./authors/authorsRoutes');
const reviewsRoutes = require('./reviews/reviewsRoutes');
const bookGroupsRoutes = require('./book_groups/bookGroupsRoutes');

module.exports = (app: Express) => {
  app.use('/api/books', bookRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/authors', authorsRoutes);
  app.use('/api/reviews', reviewsRoutes);
  app.use('/api/book-groups', bookGroupsRoutes);
};
