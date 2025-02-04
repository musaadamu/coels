// controllers/accommodationController.js
import Accommodation from '../models/accommodationModel.js';

// Create a new accommodation registration
export const registerAccommodation = async (req, res) => {
  try {
    const accommodation = new Accommodation(req.body);
    const savedAccommodation = await accommodation.save();
    res.status(201).json(savedAccommodation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all accommodation registrations (optional)
export const getAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.status(200).json(accommodations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};