import React from 'react';
import { Link } from 'react-router-dom';
import './CivilLaw.css'; // External CSS file for styling

export default function CivilLaw() {
  return (
    <div className="civil-law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Civil Law" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Civil Law</h3>
          <ol>
            <li>
              <Link to="/civil-law-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/civil-law-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/civil-law-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/civil-law-research">Research</Link>
            </li>
            <li>
              <Link to="/civil-law-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/civil-law-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image25.jpg" alt="Civil Law Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Civil Law</h1>
          <p>
            The Department of Civil Law is dedicated to providing a comprehensive education in civil law principles and practices. Our curriculum prepares students for successful careers in legal practice, advocacy, and public service.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Contract Law</li>
            <li>Tort Law</li>
            <li>Property Law</li>
            <li>Civil Procedure</li>
            <li>Family Law</li>
            <li>Commercial Law</li>
            <li>Legal Research and Writing</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Access to Legal Databases and Resources</li>
            <li>Internships with Law Firms and Courts</li>
            <li>Expert Faculty with Real-World Experience</li>
            <li>Opportunities for Moot Court and Advocacy Competitions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}