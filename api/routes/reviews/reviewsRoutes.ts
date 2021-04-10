const router = require('express').Router();
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from './reviews';

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
