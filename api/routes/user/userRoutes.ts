const router = require('express').Router();
const validInfo = require('../../middleware/validInfo');
import { registerUser, loginUser } from './user';

router.post('/register', validInfo, registerUser);
router.post('/login', validInfo, loginUser);

module.exports = router;
