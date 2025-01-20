import React from 'react';
import { Link } from 'react-router-dom';
import './IntegratedScience.css'; // External CSS file for styling

export default function IntegratedScience() {
  return (
    <div className="integrated-science-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image19.jpg" alt="Department of Integrated Science" />
        </div>
        <div className="sidebar-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/integrated-science-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/integrated-science-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/integrated-science-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/integrated-science-contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image26.jpg" alt="Integrated Science Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Integrated Science</h1>
          <p>
            Our department focuses on providing students with a holistic understanding of scientific principles, fostering interdisciplinary approaches to problem-solving and innovation.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Integrated Science</li>
            <li>Environmental Science</li>
            <li>Basic Chemistry and Physics</li>
            <li>Biological Systems</li>
            <li>Scientific Research Methods</li>
            <li>Laboratory Techniques</li>
            <li>Field Studies and Exploration</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Hands-on Laboratory Experience</li>
            <li>Collaborative Research Opportunities</li>
            <li>Fieldwork and Practical Application of Concepts</li>
            <li>Access to Modern Scientific Equipment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
