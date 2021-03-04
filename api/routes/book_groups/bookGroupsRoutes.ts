import { getBookGroups } from './bookGroups';
import getId from '../../middleware/getId';

const Router = require('express-promise-router');

const router = new Router();
router.get('/', getId, getBookGroups);

module.exports = router;
