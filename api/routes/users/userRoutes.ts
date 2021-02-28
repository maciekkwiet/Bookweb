const router = require('express').Router();
import { getAllUsers, getUser, addUser, removeUser, updateUser } from './user';

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.delete('/:id', removeUser);
router.patch('/:id', updateUser);

module.exports = router;
