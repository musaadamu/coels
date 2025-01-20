import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentEducation.css'; // External CSS file for styling

export default function DepartmentEducation() {
  return (
    <div className="education-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/education_image.jpg" alt="Department of Education" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Education</h3>
          <ol>
            <li>
              <Link to="/education-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/education-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/education-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/education-research">Research</Link>
            </li>
            <li>
              <Link to="/education-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/education-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/education_overview.jpg" alt="Education Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Education</h1>
          <p>
            The Department of Education aims to prepare future educators by providing comprehensive training in teaching methodologies, curriculum development, and educational psychology. Our programs equip students with the skills needed to excel in various educational settings.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Foundations of Education</li>
            <li>Teaching Methods and Strategies</li>
            <li>Educational Psychology</li>
            <li>Curriculum Development</li>
            <li>Assessment and Evaluation</li>
            <li>Classroom Management</li>
            <li>Special Education Principles</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Hands-on Teaching Experience in Local Schools</li>
            <li>Internship Opportunities in Educational Organizations</li>
            <li>Expert Faculty with Extensive Experience in Education</li>
            <li>Workshops and Community Outreach Programs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}