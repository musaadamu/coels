import React from 'react';
import { Link } from 'react-router-dom';
import './LibraryInformationScience.css'; // External CSS file for styling

export default function LibraryInformationScience() {
  return (
    <div className="library-information-science-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Library and Information Science" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Library and Information Science</h3>
          <ol>
            <li>
              <Link to="/library-information-science-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/library-information-science-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/library-information-science-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/library-information-science-research">Research</Link>
            </li>
            <li>
              <Link to="/library-information-science-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/library-information-science-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Library and Information Science Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Library and Information Science</h1>
          <p>
            The Department of Library and Information Science prepares students for careers in managing libraries, information centers, and digital resources. Our programs emphasize information organization, retrieval, and the role of libraries in promoting literacy and lifelong learning.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Library Science</li>
            <li>Information Organization and Retrieval</li>
            <li>Cataloging and Classification</li>
            <li>Digital Libraries and Information Systems</li>
            <li>Research Methods in Library Science</li>
            <li>Management of Libraries and Information Centers</li>
            <li>Information Literacy and User Education</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Internship Opportunities in Libraries and Information Organizations</li>
            <li>Workshops on Information Technology in Libraries</li>
            <li>Access to Professional Development Resources</li>
            <li>Community Outreach Programs and Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
}