// import React, { useState } from 'react';
// import './Accommodation.css'; // External CSS file for styling

// export default function Accommodation() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     course: '',
//     yearOfStudy: '',
//     accommodationType: '',
//     specialRequests: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Accommodation form submitted:', formData);

//     // Here you would send the data to your backend
//     // Example:
//     // fetch('/api/accommodation', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(formData),
//     // })
//     // .then(response => response.json())
//     // .then(data => console.log(data))
//     // .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div className="accommodation-page-container">
//       <header className="accommodation-header">
//         <h1>Accommodation Application</h1>
//         <h2>College of Education and Legal Studies</h2>
//       </header>

//       <main className="accommodation-content">
//         <form className="accommodation-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name:</label>
//             <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="lastName">Last Name:</label>
//             <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number:</label>
//             <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="course">Course:</label>
//             <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="yearOfStudy">Year of Study:</label>
//             <input type="text" id="yearOfStudy" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="accommodationType">Accommodation Type:</label>
//             <select id="accommodationType" name="accommodationType" value={formData.accommodationType} onChange={handleChange} required>
//               <option value="">Select</option>
//               <option value="dormitory">Dormitory</option>
//               <option value="shared_room">Shared Room</option>
//               <option value="single_room">Single Room</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="specialRequests">Special Requests:</label>
//             <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange}></textarea>
//           </div>

//           <button type="submit" className="submit-button">Apply</button>
//         </form>
//       </main>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './Accommodation.css'; // External CSS file for styling

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://coels-backend.onrender.com'
  : 'http://localhost:5000';

export default function Accommodation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    course: '',
    yearOfStudy: '',
    accommodationType: '',
    specialRequests: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${baseUrl}/api/accommodation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      setSuccess('Accommodation registration successful!');

      // Reset form fields after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        course: '',
        yearOfStudy: '',
        accommodationType: '',
        specialRequests: '',
      });
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="accommodation-page-container">
      <header className="accommodation-header">
        <h1>Accommodation Application</h1>
        <h2>College of Education and Legal Studies</h2>
      </header>

      <main className="accommodation-content">
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form className="accommodation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
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
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="yearOfStudy">Year of Study:</label>
            <input type="text" id="yearOfStudy" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="accommodationType">Accommodation Type:</label>
            <select id="accommodationType" name="accommodationType" value={formData.accommodationType} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="dormitory">Dormitory</option>
              <option value="shared_room">Shared Room</option>
              <option value="single_room">Single Room</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests:</label>
            <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Apply'}
          </button>
        </form>
      </main>
    </div>
  );
}