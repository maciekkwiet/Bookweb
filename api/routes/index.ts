const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes');
const userRoutes = require('./users/userRoutes');
const authorsRoutes = require('./authors/authorsRoutes');
const publishersRoutes = require('./publishers/publishersRoutes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/authors', authorsRoutes);
router.use('/publishers', publishersRoutes);

module.exports = router;
