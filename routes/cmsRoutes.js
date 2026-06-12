import express from 'express';
import { getCmsContent, updateCmsContent } from '../controllers/cmsController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Public route to get CMS content
router.route('/').get(getCmsContent);

// Protected admin route to update CMS content (temporarily public for demo)
router.route('/').put(updateCmsContent);

export default router;
