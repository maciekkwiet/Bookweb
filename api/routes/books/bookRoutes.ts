const router = require('express').Router();
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from './book';

router.get('/books', getBooks)
router.get('/book/:id', getBookById)
router.post('/book', createBook)
router.put('/book/:id', updateBook)
router.delete('/book/:id', deleteBook)

module.exports = router
