
import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolOfEducation.css'; // External CSS file for styling

export default function SchoolOfEducation() {
  return (
    <div className="law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image27.jpg" alt="School of Education" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/education">Department of Education</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Education Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of Education</h1>
          <p>
            Our School is committed to providing high-quality education and training, preparing future educators to excel in their teaching careers.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Comprehensive Programs in Educational Theory and Practice</li>
            <li>Hands-on Training and Classroom Experience</li>
            <li>Experienced Faculty with Expertise in Education</li>
            <li>Internships and Career Development Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
