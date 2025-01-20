import React from 'react';
import { Link } from 'react-router-dom';
import './SocialStudies.css'; // External CSS file for styling

export default function SocialStudies() {
  return (
    <div className="social-studies-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image23.jpg" alt="Department of Social Studies" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Social Studies</h3>
          <ol>
            <li>
              <Link to="/social-studies-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/social-studies-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/social-studies-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/social-studies-research">Research</Link>
            </li>
            <li>
              <Link to="/social-studies-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/social-studies-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image17.jpg" alt="Social Studies Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Social Studies</h1>
          <p>
            The Department of Social Studies offers a diverse curriculum that prepares students for careers in social research, community services, and public policy. Our programs foster critical thinking and an understanding of social dynamics.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Sociology</li>
            <li>Cultural Anthropology</li>
            <li>Political Science</li>
            <li>Social Psychology</li>
            <li>Research Methods in Social Sciences</li>
            <li>Community Development</li>
            <li>Contemporary Social Issues</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Access to Social Research Centers and Databases</li>
            <li>Internship Opportunities in Community Organizations</li>
            <li>Expert Faculty with Diverse Backgrounds</li>
            <li>Active Engagement in Community Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}