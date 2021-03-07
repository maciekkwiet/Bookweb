const Router = require('express-promise-router');

const { registerValidator, loginValidator } = require('../../middleware/validator');
import { getAllUsers, getUser, removeUser, updateUser, registerUser, loginUser } from './user';

const router = new Router();
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', removeUser);
router.put('/:id', updateUser);
router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, loginUser);

module.exports = router;
