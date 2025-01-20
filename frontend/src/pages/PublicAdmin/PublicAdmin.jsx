import React from 'react';
import { Link } from 'react-router-dom';
import './PublicAdmin.css'; // External CSS file for styling

export default function PublicAdmin() {
  return (
    <div className="public-administration-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Public Administration" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Public Administration</h3>
          <ol>
            <li>
              <Link to="/public-administration-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/public-administration-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/public-administration-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/public-administration-research">Research</Link>
            </li>
            <li>
              <Link to="/public-administration-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/public-administration-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Public Administration Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Public Administration</h1>
          <p>
            The Department of Public Administration aims to equip students with the knowledge and skills necessary for effective leadership and management in public sector organizations. Our programs emphasize policy analysis, public service ethics, and organizational behavior.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Public Administration</li>
            <li>Public Policy Analysis</li>
            <li>Human Resource Management in the Public Sector</li>
            <li>Financial Management in Public Administration</li>
            <li>Administrative Law</li>
            <li>Ethics in Public Service</li>
            <li>Research Methods in Public Administration</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Internship Opportunities with Government Agencies</li>
            <li>Workshops and Seminars with Public Sector Leaders</li>
            <li>Access to Research Resources and Databases</li>
            <li>Networking Opportunities with Alumni in Public Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}