// routes/accommodationRoutes.js
import express from 'express';
import { registerAccommodation, getAccommodations } from '../controllers/accommodationController.js';

const router = express.Router();

// Routes
router.post('/accommodation', registerAccommodation);
router.get('/accommodation', getAccommodations); // Optional for viewing all registrations

export default router;