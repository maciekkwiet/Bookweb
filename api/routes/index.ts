const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes');
const userRoutes = require('./users/userRoutes');
const authorsRoutes = require('./authors/authorsRoutes');
const bookGroupsRoutes = require('./book_groups/bookGroupsRoutes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/authors', authorsRoutes);
router.use('/book-groups', bookGroupsRoutes);

module.exports = router;
