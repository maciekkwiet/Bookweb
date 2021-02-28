const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes');
const userRoutes = require('./users/userRoutes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);

module.exports = router;
