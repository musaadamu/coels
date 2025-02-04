// models/accommodationModel.js
import mongoose from 'mongoose';

const accommodationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  course: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  accommodationType: { type: String, required: true }, // e.g., Dormitory, Shared Room, Single Room
  specialRequests: { type: String, default: '' }, // Optional field
}, { timestamps: true });

export default mongoose.model('Accommodation', accommodationSchema);