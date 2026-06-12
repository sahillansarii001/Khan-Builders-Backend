import express from 'express';
import { getGalleryImages, addGalleryImage, updateGalleryImage, deleteGalleryImage } from '../controllers/galleryController.js';

const router = express.Router();

router.route('/')
  .get(getGalleryImages)
  .post(addGalleryImage);

router.route('/:id')
  .put(updateGalleryImage)
  .delete(deleteGalleryImage);

export default router;
