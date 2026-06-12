import express from 'express';
import { getProperties, getPropertyById, createProperty, updateProperty, deleteProperty } from '../controllers/propertyController.js';
import { protect, propertyManager } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getProperties)
  .post(createProperty); // Temporarily public for demo

router.route('/:id')
  .get(getPropertyById)
  .put(updateProperty) // Temporarily public for demo
  .delete(deleteProperty); // Temporarily public for demo

export default router;
