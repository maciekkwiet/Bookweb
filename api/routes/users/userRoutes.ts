const router = require('express').Router();
import { getAllUsers, getUser, removeUser, updateUser } from './user';

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', removeUser);
router.put('/:id', updateUser);

module.exports = router;
