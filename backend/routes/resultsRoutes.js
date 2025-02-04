// routes/resultsRoutes.js
import express from 'express';
import { fetchResults, uploadResults } from '../controllers/resultsController.js';
import multer from 'multer';

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the directory for uploaded files

const router = express.Router();

// Route to fetch all results
router.get('/results', fetchResults);

// Route to upload results file
router.post('/upload-results', upload.single('file'), uploadResults); // Handle single file upload

export default router;