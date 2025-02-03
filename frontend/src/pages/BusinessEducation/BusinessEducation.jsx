import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessEducation.css'; // External CSS file for styling

export default function BusinessEducation() {
  return (
    <div className="business-education-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Business Education" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Business Education</h3>
          <ol>
            <li>
              <Link to="/business-education-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/business-education-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/business-education-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/business-education-research">Research</Link>
            </li>
            <li>
              <Link to="/business-education-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/business-education-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image22.jpg" alt="Business Education Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Business Education</h1>
          <p>
            The Department of Business Education prepares students for successful careers in business and education. Our curriculum combines business theory with practical teaching strategies, equipping graduates to excel in various roles within educational and business settings.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Principles of Business Management</li>
            <li>Accounting and Financial Management</li>
            <li>Business Communication</li>
            <li>Educational Technology in Business</li>
            <li>Marketing Principles</li>
            <li>Curriculum Development for Business Education</li>
            <li>Assessment and Evaluation in Business Education</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Hands-on Experience through Internships in Business Settings</li>
            <li>Workshops and Seminars with Industry Experts</li>
            <li>Access to Business Resources and Libraries</li>
            <li>Networking Opportunities with Local Businesses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}