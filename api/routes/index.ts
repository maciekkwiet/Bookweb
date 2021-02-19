const router = require('express').Router();
const bookRoutes = require('./books/bookRoutes')

router.use('/books', bookRoutes);

module.exports = router
