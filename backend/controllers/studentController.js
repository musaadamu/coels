import Student from '../models/studentModel.js';

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const studentData = { ...req.body, documents: [] };

    // Iterate over uploaded files and push the file paths to the documents array
    if (req.files) {
      req.files.forEach(file => {
        studentData.documents.push(file.path); // Save the file path
      });
    }

    const student = new Student(studentData);
    const savedStudent = await student.save();
    
    // Respond with the saved student data and document paths
    res.status(201).json({
      message: 'Student created successfully',
      student: savedStudent,
      documents: savedStudent.documents // Include the documents in the response
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student
export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};