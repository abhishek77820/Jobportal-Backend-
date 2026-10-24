import express from 'express';
import jobRouter from './jobRoutes.js'

const router = express.Router();

router.use("/jobs", jobRouter);


export default router;