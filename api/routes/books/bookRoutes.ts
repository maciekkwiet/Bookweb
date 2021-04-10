const Router = require('express-promise-router');
import { getBooks, getBookById, createBook, updateBook, deleteBook, getTopBooks } from './book';

const router = new Router();
router.get('/', getBooks);
router.get('/top', getTopBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
