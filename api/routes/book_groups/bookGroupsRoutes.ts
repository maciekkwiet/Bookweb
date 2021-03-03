import { getBookGroups, getBookGroup } from './bookGroups';
import getId from '../../middleware/getId';

const Router = require('express-promise-router');

const router = new Router();

router.get('/', getId, getBookGroups); // get all public book_groups and book_groups for user
router.get('/:id', getBookGroup); // get book_group if it is public or that users

module.exports = router;
