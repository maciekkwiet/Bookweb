import { getBookGroups, getBookGroup, createBookGroup, deleteBookGroup } from './bookGroups';
import getId from '../../middleware/getId';

const Router = require('express-promise-router');

const router = new Router();
router.get('/', getId, getBookGroups);
router.post('/', getId, createBookGroup);
router.get('/:id', getId, getBookGroup);
router.delete('/:id', getId, deleteBookGroup);

module.exports = router;
