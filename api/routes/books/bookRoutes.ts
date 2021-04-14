const Router = require('express-promise-router');
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getTopBooks,
  getBookAuthors,
  getBookReviews,
  getBooksWithAuthor,
  getScoreByBookId,

} from './book';

const router = new Router();
router.get('/', getBooks);
router.get('/top', getTopBooks);
router.get('/:id', getBookById);
router.get('/:id/authors', getBookAuthors);
router.get('/:id/reviews', getBookReviews);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/details/:id', getBooksWithAuthor);
router.get('/average/:id', getScoreByBookId);

module.exports = router;
