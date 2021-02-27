const router = require('express').Router();
import { getBooks, getBookById, createBook, updateBook, deleteBook, getBookByISBN, getBookByTitle } from './book';

router.get('/books', getBooks);
router.get('/book/:id', getBookById);
router.get('/book/:isbn', getBookByISBN);
router.get('/book/:title', getBookByTitle);
router.post('/book', createBook);
router.patch('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

module.exports = router;
