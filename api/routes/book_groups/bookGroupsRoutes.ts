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
router.get('/', getId, getBookGroups);
router.post('/', getId, createBookGroup);
router.get('/:id', getId, hasReadAccessToBookGroup, getBookGroup);
router.patch('/:id', getId, hasWriteAccessToBookGroup, modifyBookGroup);
router.delete('/:id', getId, hasWriteAccessToBookGroup, deleteBookGroup);
router.get('/:id/books', getId, hasReadAccessToBookGroup, getBooksFromBookGroup);
router.post('/:id/books', getId, hasWriteAccessToBookGroup, addBooktoBookGroup);
router.delete('/:id/books/:book_id', getId, hasWriteAccessToBookGroup, deleteBookfromBookGroup);

module.exports = router;
