const router = require('express').Router();
import { getAuthors, getAuthorById, getBooksByAuthorId, createAuthor, updateAuthor, deleteAuthor } from './author';

router.get('/authors', getAuthors);
router.get('/author/:id', getAuthorById);
router.get('/author/:id/books', getBooksByAuthorId);
router.post('/author', createAuthor);
router.put('/author/:id', updateAuthor);
router.delete('/author/:id', deleteAuthor);

module.exports = router;
