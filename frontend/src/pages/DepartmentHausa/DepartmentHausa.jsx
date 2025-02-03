import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentHausa.css'; // External CSS file for styling

export default function DepartmentHausa() {
  return (
    <div className="hausa-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image21.jpg" alt="Department of Hausa" />
        </div>
        <div className="sidebar-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/hausa-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/hausa-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/hausa-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/hausa-contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Hausa Department Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Hausa</h1>
          <p>
            Our Department of Hausa is dedicated to the study and promotion of the Hausa language, literature, and culture, preparing students to engage deeply with one of Africa's most widely spoken languages.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Hausa Language</li>
            <li>Hausa Literature and Oral Traditions</li>
            <li>Advanced Hausa Grammar</li>
            <li>Hausa Poetry and Prose</li>
            <li>Sociolinguistics of Hausa</li>
            <li>Translation and Interpretation</li>
            <li>Hausa Media and Communication</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Experienced Instructors in Hausa Language and Culture</li>
            <li>Field Trips and Cultural Immersion Programs</li>
            <li>Collaborations with Indigenous Hausa Scholars</li>
            <li>Language Proficiency Certifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
