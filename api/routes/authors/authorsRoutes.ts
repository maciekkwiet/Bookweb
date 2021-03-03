const Router = require('express-promise-router');

import { getAuthors, getAuthorById, getBooksByAuthorId, createAuthor, updateAuthor, deleteAuthor } from './author';

const router = new Router();
router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.get('/:id/books', getBooksByAuthorId);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;
