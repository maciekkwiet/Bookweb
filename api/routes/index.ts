const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes');
const authorsRoutes = require('./authors/authorsRoutes');

router.use('/books', bookRoutes);
router.use('/authors', authorsRoutes);

module.exports = router;
