const router = require('express').Router();
import { getPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher } from './publishers';

router.get('/publishers', getPublishers);
router.get('/publisher/:id', getPublisherById);
router.post('/publisher', createPublisher);
router.put('/publisher/:id', updatePublisher);
router.delete('/publisher/:id', deletePublisher);

module.exports = router;
