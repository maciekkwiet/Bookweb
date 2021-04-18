const Router = require('express-promise-router');
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from './reviews';

const router = new Router();

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
