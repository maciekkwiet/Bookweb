const router = require('express').Router();

import bookRoutes from './bookRoutes'

router.use('/books', bookRoutes);

module.exports = router
