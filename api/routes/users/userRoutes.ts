const router = require('express').Router();
const { registerValidator, loginValidator } = require('../../middleware/validator');
import asyncMiddleware from '../../middleware/asyncMiddleware';
import { getAllUsers, getUser, removeUser, updateUser, registerUser, loginUser } from './user';

router.get('/', asyncMiddleware(getAllUsers));
router.get('/:id', asyncMiddleware(getUser));
router.delete('/:id', asyncMiddleware(removeUser));
router.put('/:id', asyncMiddleware(updateUser));
router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, loginUser);

module.exports = router;
