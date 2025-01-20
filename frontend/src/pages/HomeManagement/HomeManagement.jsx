import React from 'react';
import { Link } from 'react-router-dom';
import './HomeManagement.css'; // External CSS file for styling

export default function HomeManagement() {
  return (
    <div className="home-management-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image23.jpg" alt="Department of Home Management" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Home Management</h3>
          <ol>
            <li>
              <Link to="/home-management-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/home-management-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/home-management-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/home-management-research">Research</Link>
            </li>
            <li>
              <Link to="/home-management-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/home-management-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image25.jpg" alt="Home Management Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Home Management</h1>
          <p>
            The Department of Home Management focuses on equipping students with the skills necessary for effective household management, including budgeting, nutrition, and family resource management. Our programs prepare students for careers in various areas of home economics and community service.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Home Management</li>
            <li>Nutrition and Health</li>
            <li>Family Resource Management</li>
            <li>Textiles and Apparel</li>
            <li>Interior Design Basics</li>
            <li>Child Development</li>
            <li>Financial Management for Households</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Hands-on Experience in Home Management Labs</li>
            <li>Internship Opportunities in Community Organizations</li>
            <li>Expert Faculty with Diverse Backgrounds</li>
            <li>Workshops and Community Engagement Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}