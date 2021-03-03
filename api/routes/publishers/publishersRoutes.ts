const router = require('express').Router();
import {
  getPublishers,
  getPublisherById,
  getBooksByPublisherId,
  createPublisher,
  updatePublisher,
  deletePublisher,
} from './publishers';

router.get('/publishers', getPublishers);
router.get('/publisher/:id', getPublisherById);
router.get('/publisher:id/books', getBooksByPublisherId);
router.post('/publisher', createPublisher);
router.put('/publisher/:id', updatePublisher);
router.delete('/publisher/:id', deletePublisher);

module.exports = router;
