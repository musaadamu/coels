// controllers/resultsController.js
import Results from '../models/resultsModel.js';
import fs from 'fs';
import path from 'path';
import cloudinary from 'cloudinary'; // Optional: If you want to use Cloudinary for file storage

// Configure Cloudinary (if using)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fetch all results
export const fetchResults = async (req, res) => {
  try {
    const results = await Results.find();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ message: 'Error fetching results' });
  }
};

// Upload results file
export const uploadResults = async (req, res) => {
  const { course } = req.body; // Expecting course info in the request body
  const file = req.file; // Get the uploaded file

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    // Construct URL for local storage
    const fileUrl = `/uploads/${file.filename}`;

    // Create a new result entry
    const newResult = new Results({
      course,
      fileUrl,
    });

    await newResult.save();
    res.status(201).json({ message: 'File uploaded successfully', success: true });
  } catch (error) {
    console.error('Error while uploading results:', error);
    res.status(500).json({ message: 'Error uploading file' });
  }
};