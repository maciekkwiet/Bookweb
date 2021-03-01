const router = require('express').Router();
const { registerValidator, loginValidator } = require('../../middleware/validator');
import { registerUser, loginUser } from './user';

router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, loginUser);

module.exports = router;
