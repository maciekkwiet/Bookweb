const Router = require('express-promise-router');
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksWithAuthor,
  getScoreByBookId,
  getTopBooks,
} from './book';

const router = new Router();
router.get('/', getBooks);
router.get('/:id', getBookById);
router.get('/details/:id', getBooksWithAuthor);
router.get('/average/:id', getScoreByBookId);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/top', getTopBooks);

module.exports = router;
