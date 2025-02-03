import React from 'react';
import { Link } from 'react-router-dom';
import './IslamicStudies.css'; // External CSS file for styling

export default function IslamicStudies() {
  return (
    <div className="islamic-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image22.jpg" alt="Department of Islamic Studies" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Islamic Studies</h3>
          <ol className="sidebar-links">  {/* Ordered list for itemized links */}
            <li>
              <Link to="/islamic-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/islamic-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/islamic-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/islamic-research">Research</Link>
            </li>
            <li>
              <Link to="/islamic-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/islamic-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Islamic Studies Department Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Islamic Studies</h1>
          <p>
            The Department of Islamic Studies is dedicated to providing students with comprehensive knowledge of Islamic theology, jurisprudence, and history, fostering a deeper understanding of Islamic teachings and their applications.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Islamic Jurisprudence</li>
            <li>Islamic Theology and Philosophy</li>
            <li>Qur'anic Sciences</li>
            <li>Hadith Studies</li>
            <li>Islamic Ethics and Law</li>
            <li>Islamic History and Civilization</li>
            <li>Arabic for Islamic Scholars</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Expert Faculty in Islamic Jurisprudence and Theology</li>
            <li>Community Engagement and Outreach Programs</li>
            <li>Access to Extensive Islamic Manuscript Collections</li>
            <li>Field Research and Cultural Immersion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
