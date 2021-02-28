const router = require('express').Router();
import asyncMiddleware from '../../middleware/asyncMiddleware';
import { getAllUsers, getUser, removeUser, updateUser } from './user';

router.get('/', asyncMiddleware(getAllUsers));
router.get('/:id', asyncMiddleware(getUser));
router.delete('/:id', asyncMiddleware(removeUser));
router.put('/:id', asyncMiddleware(updateUser));

module.exports = router;
