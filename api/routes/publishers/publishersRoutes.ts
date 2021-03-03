const Router = require('express-promise-router');

import { getPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher } from './publishers';

const router = new Router();
router.get('/publishers', getPublishers);
router.get('/publisher/:id', getPublisherById);
router.post('/publisher', createPublisher);
router.put('/publisher/:id', updatePublisher);
router.delete('/publisher/:id', deletePublisher);

module.exports = router;
