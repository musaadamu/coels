
import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolOfGS.css'; // External CSS file for styling

export default function SchoolOfGS() {
  return (
    <div className="law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image28.jpg" alt="School of General Studies" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/science">Department of Science</Link>
            </li>
            <li>
              <Link to="/arts-social-sciences">Department of Arts and Social Sciences</Link>
            </li>
            <li>
              <Link to="/languages">Department of Languages</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="images/image25.jpg" alt="General Studies Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of General Studies</h1>
          <p>
            The School of General Studies offers a diverse range of foundational courses aimed at equipping students with essential knowledge across various disciplines.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Comprehensive Programs in Science, Arts, and Social Sciences</li>
            <li>Interdisciplinary Approach to Learning</li>
            <li>Experienced Faculty Dedicated to Student Success</li>
            <li>Research Opportunities and Community Engagement</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
