const router = require('express').Router();
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from './reviews';

router.get('/reviews/', getReviews);
router.get('/reviews/:id/', getReviewById);
router.post('/review', createReview);
router.put('/review/:id', updateReview);
router.delete('/review/:isd', deleteReview);

module.exports = router;
