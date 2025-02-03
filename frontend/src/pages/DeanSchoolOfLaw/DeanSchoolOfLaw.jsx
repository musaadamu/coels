import React from 'react'
import { Link } from 'react-router-dom';
import './DeanSchoolOfLaw.css';

export default function DeanSchoolOfLaw() {
  return (
    <div className="law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="/images/image28.jpg" alt="School Building" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/civil-law">Department of Civil Law</Link>
            </li>
            <li>
              <Link to="/sharia-civil-law">Department of Sharia and Civil Law</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="/images/image25.jpg" alt="Law Students" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of Law</h1>
          <p>
            Our School of Law offers comprehensive legal education in both civil and sharia law, equipping students with the skills necessary to excel in the legal profession.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Specialized Programs in Civil and Sharia Law</li>
            <li>Experienced Faculty and Legal Practitioners</li>
            <li>Research Opportunities and Legal Clinics</li>
            <li>Internship and Placement Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
