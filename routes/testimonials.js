import express from 'express';
import { getTestimonials, getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../controllers/testimonialController.js';
import { protect, leadManager } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getTestimonials)
  .post(createTestimonial);

router.get('/all', getAllTestimonials);

router.route('/:id')
  .put(updateTestimonial)
  .delete(deleteTestimonial);

export default router;
