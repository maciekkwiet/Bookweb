const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes');
const userRoutes = require('./users/userRoutes');
const authorsRoutes = require('./authors/authorsRoutes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/authors', authorsRoutes);

module.exports = router;

