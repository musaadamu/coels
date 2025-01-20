
import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolOASMS.css'; // External CSS file for styling

export default function SchoolOASMS() {
  return (
    <div className="law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image22.jpg" alt="School of Arts" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/economics">Department of Economics</Link>
            </li>
            <li>
              <Link to="/social-studies">Department of Social Studies</Link>
            </li>
            <li>
              <Link to="/islamic-studies">Department of Islamic Studies</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Arts Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of Arts, Social and Management Sciences</h1>
          <p>
            Our School offers a diverse range of programs in the arts and social sciences, designed to equip students with critical thinking skills and practical knowledge necessary for success in their fields.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Comprehensive Programs in Economics, Social Studies, and Islamic Studies</li>
            <li>Experienced Faculty with a Passion for Teaching</li>
            <li>Research Opportunities and Community Engagement</li>
            <li>Internship and Career Development Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
