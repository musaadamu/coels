import React, { useState } from 'react';
import './Registration.css'; // External CSS file for styling

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    lga: '',
    state: '',
    documents: [null, null, null, null, null], // Array for file uploads
    registrationNumber: '',
    healthStatus: '',
    sex: '',
    course: '',
    level: '',
    yearOfAdmission: '',
    session: '',
    dob: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, type, files } = e.target;
    if (type === 'file') {
      const index = parseInt(name.split('document')[1]);
      const newDocuments = [...formData.documents];
      newDocuments[index] = files[0]; // Store the file object
      setFormData({ ...formData, documents: newDocuments });
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
  
    // Append form fields to FormData
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file, index) => {
          if (file) {
            formDataToSend.append(`documents`, file); // Use the same key as multer
          }
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
  
    fetch('/api/students', {
      method: 'POST',
      body: formDataToSend,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };
  
  return (
    <div className="registration-page-container">
      <header className="registration-header">
        <h1>Student Registration</h1>
        <h2>College of Education and Legal Studies</h2>
      </header>

      <main className="registration-content">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="middleName">Middle Name:</label>
            <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="lga">Local Government of Origin:</label>
            <input type="text" id="lga" name="lga" value={formData.lga} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Documents (Upload Certificates):</label>
            {formData.documents.map((_, index) => (
              <input
                key={index}
                type="file"
                name={`document${index}`}
                accept="image/*"
                onChange={handleChange}
                required={index < 2} // First two documents are required
              />
            ))}
          </div>

          <div className="form-group">
            <label htmlFor="registrationNumber">Registration Number:</label>
            <input type="text" id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="healthStatus">Health Status:</label>
            <input type="text" id="healthStatus" name="healthStatus" value={formData.healthStatus} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="sex">Sex:</label>
            <select id="sex" name="sex" value={formData.sex} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="course">Course Selection:</label>
            <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="level">Level:</label>
            <input type="text" id="level" name="level" value={formData.level} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="yearOfAdmission">Year of Admission:</label>
            <input type="number" id="yearOfAdmission" name="yearOfAdmission" value={formData.yearOfAdmission} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="session">Session:</label>
            <input type="text" id="session" name="session" value={formData.session} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-button">Register</button>
        </form>
      </main>
    </div>
  );
}