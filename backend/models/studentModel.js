// // models/studentModel.js
// import mongoose from 'mongoose';

// const studentSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   middleName: { type: String, default: '' },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   lga: { type: String, required: true },
//   state: { type: String, required: true },
//   documents: [{ type: String }], // URLs or paths to uploaded documents
//   registrationNumber: { type: String, required: true, unique: true },
//   healthStatus: { type: String, required: true },
//   sex: { type: String, required: true, enum: ['male', 'female', 'other'] },
//   course: { type: String, required: true },
//   level: { type: String, required: true },
//   yearOfAdmission: { type: Number, required: true },
//   session: { type: String, required: true },
//   dob: { type: Date, required: true },
//   country: { type: String, required: true },
// }, { timestamps: true });

// export default mongoose.model('Student', studentSchema);

// models/studentModel.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, default: '' },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  lga: { type: String, required: true },
  state: { type: String, required: true },
  documents: [{ type: String }], // URLs or paths to uploaded documents
  registrationNumber: { type: String, required: true, unique: true },
  healthStatus: { type: String, required: true },
  sex: { type: String, required: true, enum: ['male', 'female', 'other'] },
  course: { type: String, required: true },
  level: { type: String, required: true },
  yearOfAdmission: { type: Number, required: true },
  session: { type: String, required: true },
  dob: { type: Date, required: true },
  country: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);