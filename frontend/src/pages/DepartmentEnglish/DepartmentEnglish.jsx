import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentEnglish.css'; // External CSS file for styling

export default function DepartmentEnglish() {
  return (
    <div className="english-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of English" />
        </div>
        <div className="sidebar-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/english-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/english-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/english-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/english-contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="English Department Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of English</h1>
          <p>
            Our Department of English offers diverse courses in literature, linguistics, and creative writing to foster critical thinking and effective communication.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to English Literature</li>
            <li>Creative Writing</li>
            <li>Advanced Grammar and Composition</li>
            <li>World Literature</li>
            <li>Shakespearean Studies</li>
            <li>Phonetics and Phonology</li>
            <li>Comparative Linguistics</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Expert Faculty with Specializations in Literature and Language</li>
            <li>Workshops and Literary Events</li>
            <li>Internship and Publication Opportunities</li>
            <li>Collaborative Research and Creative Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
