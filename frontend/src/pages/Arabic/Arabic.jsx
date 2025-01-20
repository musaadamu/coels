import React from 'react';
import { Link } from 'react-router-dom';
import './Arabic.css'; // External CSS file for styling

export default function Arabic() {
  return (
    <div className="arabic-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Arabic" />
        </div>
        <div className="sidebar-links">
          <h3>Quick Links</h3>
          <ol className="quick-links-list">  {/* Ordered list for itemized links */}
            <li>
              <Link to="/arabic-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/arabic-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/arabic-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/arabic-research">Research</Link>
            </li>
            <li>
              <Link to="/arabic-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/arabic-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Arabic Department Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Arabic</h1>
          <p>
            Our Department of Arabic is committed to fostering the growth and preservation of Arabic language, literature, and culture, providing students with a deep and immersive learning experience.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Arabic Language</li>
            <li>Classical Arabic Literature</li>
            <li>Modern Arabic Linguistics</li>
            <li>Arabic Grammar and Syntax</li>
            <li>Translation and Interpretation</li>
            <li>Islamic Text Analysis</li>
            <li>Arabic Calligraphy</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Comprehensive Arabic Language Programs</li>
            <li>Workshops and Field Research</li>
            <li>Arabic Cultural Immersion Programs</li>
            <li>Translation and Literature Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
