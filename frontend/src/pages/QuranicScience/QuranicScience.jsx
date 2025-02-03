import React from 'react';
import { Link } from 'react-router-dom';
import './QuranicScience.css'; // External CSS file for styling

export default function QuranicScience() {
  return (
    <div className="quranic-science-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Qur'anic Science" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Qur'anic Science</h3>
          <ol>
            <li>
              <Link to="/quranic-science-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/quranic-science-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/quranic-science-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/quranic-science-research">Research</Link>
            </li>
            <li>
              <Link to="/quranic-science-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/quranic-science-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Qur'anic Science Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Qur'anic Science</h1>
          <p>
            The Department of Qur'anic Science is dedicated to the study and interpretation of the Qur'an. Our programs aim to provide students with a deep understanding of the text, its context, and its application in contemporary society, fostering a comprehensive appreciation of Islamic scholarship.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Qur'anic Studies</li>
            <li>Qur'anic Arabic Language</li>
            <li>Exegesis of the Qur'an (Tafsir)</li>
            <li>Qur'anic Sciences and Methodologies</li>
            <li>History of the Qur'an</li>
            <li>Contemporary Issues in Qur'anic Interpretation</li>
            <li>Memorization Techniques and Practices</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Workshops on Qur'anic Recitation and Memorization</li>
            <li>Access to Qur'anic Research Libraries</li>
            <li>Internship Opportunities in Educational Institutions</li>
            <li>Cultural and Community Engagement Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}