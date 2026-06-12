import express from 'express';
import { getLeads, createLead, updateLead, deleteLead, exportLeadsCSV } from '../controllers/leadController.js';
import { protect, leadManager } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getLeads)
  .post(createLead);

router.get('/export/csv', exportLeadsCSV);

router.route('/:id')
  .put(updateLead)
  .delete(deleteLead);

export default router;
