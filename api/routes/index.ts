const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes');
const userRoutes = require('./users/userRoutes');
const authorsRoutes = require('./authors/authorsRoutes');
const reviewsRoutes = require('./reviews/reviewsRoutes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/authors', authorsRoutes);
router.use('/reviews', reviewsRoutes);

module.exports = router;
