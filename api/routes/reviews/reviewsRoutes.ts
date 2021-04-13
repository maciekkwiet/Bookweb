const router = require('express').Router();
import { getReviews, getReviewById, createReview, updateReview, deleteReview, getAllReviewsByBookId } from './reviews';

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.get('/all/:id', getAllReviewsByBookId);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
