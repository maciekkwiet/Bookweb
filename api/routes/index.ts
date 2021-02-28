const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes');
const userRoutes = require('./user/userRoutes');

router.use('/books', bookRoutes);
router.use('/auth', userRoutes);

module.exports = router;
