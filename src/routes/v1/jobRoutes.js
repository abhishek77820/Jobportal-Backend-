import express from 'express'

import { createJobs, getJobs, getJobsById } from '../../Controllers/jobsController.js';

const router = express.Router();

router.post('/', createJobs);
router.get('/', getJobs);

router.get('/:id', getJobsById);



export default router;