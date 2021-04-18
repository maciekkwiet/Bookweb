const Router = require('express-promise-router');
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getTopBooks,
  getAverageRatingByBookId,
  getBookByTitle,
} from './book';

const router = new Router();
router.get('/', getBooks);
router.get('/title', getBookByTitle);
router.get('/:id', getBookById);
router.get('/top', getTopBooks);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/average/:id', getAverageRatingByBookId);

module.exports = router;
