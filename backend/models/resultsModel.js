// models/resultsModel.js
import mongoose from 'mongoose';

const resultsSchema = new mongoose.Schema({
  course: { type: String, required: true },
  fileUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Results', resultsSchema);