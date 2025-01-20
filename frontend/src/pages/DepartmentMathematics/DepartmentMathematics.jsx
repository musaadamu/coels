
import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentMathematics.css'; // External CSS file for styling

export default function DepartmentMathematics() {
  return (
    <div className="math-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image18.jpg" alt="Department of Mathematics" />
        </div>
        <div className="sidebar-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/math-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/math-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/math-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/math-contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image26.jpg" alt="Mathematics Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Mathematics</h1>
          <p>
            Our Department provides students with a robust mathematical foundation, preparing them for careers in academia, industry, and research.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Calculus I & II</li>
            <li>Linear Algebra</li>
            <li>Discrete Mathematics</li>
            <li>Statistics and Probability</li>
            <li>Numerical Analysis</li>
            <li>Abstract Algebra</li>
            <li>Differential Equations</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Mathematics Labs for Practical Learning</li>
            <li>Collaborative Research Opportunities</li>
            <li>Expert Faculty with Diverse Specializations</li>
            <li>Internship and Industry Exposure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
