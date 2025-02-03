
import React from 'react';
import { Link } from 'react-router-dom';
import './DeanSchoolOfLanguages.css'; // External CSS file for styling

export default function DeanSchoolOfLanguages() {
  return (
    <div className="law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image28.jpg" alt="School Building" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/english-language">Department of English Language</Link>
            </li>
            <li>
              <Link to="/hausa-language">Department of Hausa Language</Link>
            </li>
            <li>
              <Link to="/arabic-language">Department of Arabic Languages</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="images/image17.jpg" alt="Languages Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of Languages</h1>
          <p>
            Our School of Languages offers comprehensive programs in English, Hausa, and Arabic, equipping students with the skills necessary to excel in multilingual environments.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Specialized Programs in English, Hausa, and Arabic</li>
            <li>Experienced Faculty with Language Expertise</li>
            <li>Research Opportunities and Language Labs</li>
            <li>Internship and Placement Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
