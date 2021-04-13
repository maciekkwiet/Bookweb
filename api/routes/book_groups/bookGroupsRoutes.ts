import {
  getBookGroups,
  getBookGroup,
  createBookGroup,
  deleteBookGroup,
  modifyBookGroup,
  getBooksFromBookGroup,
  addBooktoBookGroup,
  deleteBookfromBookGroup,
} from './bookGroups';
import getId from '../../middleware/getId';
import hasReadAccessToBookGroup from '../../middleware/hasReadAccessToBookGroup';
import hasWriteAccessToBookGroup from '../../middleware/hasWriteAccessToBookGroup';

const Router = require('express-promise-router');

const router = new Router();
router.get('/', getBookGroups);
router.post('/', createBookGroup);
router.get('/:id', hasReadAccessToBookGroup, getBookGroup);
router.patch('/:id', hasWriteAccessToBookGroup, modifyBookGroup);
router.delete('/:id', hasWriteAccessToBookGroup, deleteBookGroup);
router.get('/:id/books', hasReadAccessToBookGroup, getBooksFromBookGroup);
router.post('/:id/books', hasWriteAccessToBookGroup, addBooktoBookGroup);
router.delete('/:id/books/:book_id', hasWriteAccessToBookGroup, deleteBookfromBookGroup);

module.exports = router;
