
import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolOfECCE.css'; // External CSS file for styling

export default function SchoolOfECCE() {
  return (
    <div className="law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image23.jpg" alt="School of Early Child Care Education" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/primary-education">Department of Primary Education</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="images/image20.jpg" alt="Early Child Care Education Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of Early Child Care Education</h1>
          <p>
            Our School is dedicated to providing high-quality education and training in early childhood care, preparing students to nurture and educate young children effectively.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Comprehensive Programs in Early Childhood Education</li>
            <li>Hands-on Training and Classroom Experience</li>
            <li>Experienced Faculty with Expertise in Child Development</li>
            <li>Internships and Career Support Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

