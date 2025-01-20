import React from 'react';
import { Link } from 'react-router-dom';
import './CommunitySocialDevelopment.css'; // External CSS file for styling

export default function CommunitySocialDevelopment() {
  return (
    <div className="community-social-development-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Community and Social Development" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Community and Social Development</h3>
          <ol>
            <li>
              <Link to="/community-social-development-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/community-social-development-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/community-social-development-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/community-social-development-research">Research</Link>
            </li>
            <li>
              <Link to="/community-social-development-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/community-social-development-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Community and Social Development Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Community and Social Development</h1>
          <p>
            The Department of Community and Social Development is dedicated to training students in the principles and practices of community engagement, social welfare, and sustainable development. Our programs prepare graduates for impactful careers in various social sectors, focusing on community empowerment and social justice.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Community Development</li>
            <li>Social Work Principles and Practices</li>
            <li>Community Health and Well-being</li>
            <li>Project Management in Social Development</li>
            <li>Research Methods in Community Studies</li>
            <li>Policy Analysis and Advocacy</li>
            <li>Ethics in Social Work</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Internship Opportunities in Non-profit Organizations</li>
            <li>Workshops on Community Engagement Techniques</li>
            <li>Access to Research and Community Resources</li>
            <li>Cultural and Community Service Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}