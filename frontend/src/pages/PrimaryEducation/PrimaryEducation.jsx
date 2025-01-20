import React from 'react';
import { Link } from 'react-router-dom';
import './PrimaryEducation.css'; // External CSS file for styling

export default function PrimaryEducation() {
  return (
    <div className="primary-education-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image23.jpg" alt="Department of Primary Education" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Primary Education</h3>
          <ol>
            <li>
              <Link to="/primary-education-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/primary-education-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/primary-education-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/primary-education-research">Research</Link>
            </li>
            <li>
              <Link to="/primary-education-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/primary-education-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image20.jpg" alt="Primary Education Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Primary Education</h1>
          <p>
            The Department of Primary Education prepares future educators to teach and inspire young learners. Our curriculum focuses on child development, teaching strategies, and classroom management, equipping students with essential skills for a successful career in primary education.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Primary Education</li>
            <li>Child Development and Psychology</li>
            <li>Teaching Methods for Young Learners</li>
            <li>Literacy and Numeracy Development</li>
            <li>Inclusive Education Practices</li>
            <li>Assessment Techniques for Primary Education</li>
            <li>Classroom Management Strategies</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Hands-on Teaching Experience in Local Primary Schools</li>
            <li>Internship Opportunities in Educational Settings</li>
            <li>Expert Faculty with Experience in Primary Education</li>
            <li>Workshops and Community Engagement Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}