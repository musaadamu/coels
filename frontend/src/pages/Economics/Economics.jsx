import React from 'react';
import { Link } from 'react-router-dom';
import './Economics.css'; // External CSS file for styling

export default function Economics() {
  return (
    <div className="economics-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image24.jpg" alt="Department of Economics" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Economics</h3>  {/* Department name instead of Quick Links */}
          <ol>
            <li>
              <Link to="/economics-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/economics-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/economics-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/economics-research">Research</Link>
            </li>
            <li>
              <Link to="/economics-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/economics-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Economics Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Economics</h1>
          <p>
            The Department of Economics provides students with comprehensive training in economic theory, policy, and quantitative analysis, preparing them for a wide range of career paths in government, academia, and the private sector.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Microeconomics</li>
            <li>Macroeconomics</li>
            <li>Development Economics</li>
            <li>International Trade</li>
            <li>Econometrics</li>
            <li>Public Finance</li>
            <li>Labor Economics</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Access to Research Centers and Economic Data Labs</li>
            <li>Internship and Real-World Applications</li>
            <li>Faculty with Expertise in Diverse Economic Fields</li>
            <li>Collaborative Research Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
