// import {
//   getBookGroups,
//   getBookGroup,
//   createBookGroup,
//   deleteBookGroup,
//   modifyBookGroup,
//   getBooksFromBookGroup,
//   addBooktoBookGroup,
//   deleteBookfromBookGroup,
//   getBookShelf,
// } from './bookGroups';
// import getId from '../../middleware/getId';
// import hasReadAccessToBookGroup from '../../middleware/hasReadAccessToBookGroup';
// import hasWriteAccessToBookGroup from '../../middleware/hasWriteAccessToBookGroup';

// const Router = require('express-promise-router');

// const router = new Router();
// router.get('/', getId, getBookGroups);
// router.post('/', getId, createBookGroup);
// router.get('/:id', getId, hasReadAccessToBookGroup, getBookGroup);
// router.patch('/:id', getId, hasWriteAccessToBookGroup, modifyBookGroup);
// router.delete('/:id', getId, hasWriteAccessToBookGroup, deleteBookGroup);
// router.get('/:id/books', getId, hasReadAccessToBookGroup, getBooksFromBookGroup);
// router.post('/:id/books', getId, hasWriteAccessToBookGroup, addBooktoBookGroup);
// router.delete('/:id/books/:book_id', getId, hasWriteAccessToBookGroup, deleteBookfromBookGroup);
// router.get('/groupDetails', getBookShelf);

// module.exports = router;

import {
  getBookGroups,
  getBookGroup,
  createBookGroup,
  deleteBookGroup,
  modifyBookGroup,
  getBooksFromBookGroup,
  addBooktoBookGroup,
  deleteBookfromBookGroup,
  getBookShelf,
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
router.get('/:email/:book_groups/bookShelves', getBookShelf)

module.exports = router;
