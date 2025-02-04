import express from 'express';
import multer from 'multer';
import { createStudent, getStudents, updateStudent, deleteStudent } from '../controllers/studentController.js';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

const router = express.Router();

// Routes
router.post('/students', upload.array('documents', 5), createStudent); // Allow up to 5 documents
router.get('/students', getStudents);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;