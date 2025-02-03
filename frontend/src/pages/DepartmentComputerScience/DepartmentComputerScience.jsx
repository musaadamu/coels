import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentComputerScience.css'; // External CSS file for styling

export default function DepartmentOfComputerScience() {
  return (
    <div className="cs-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image17.jpg" alt="Department of Computer Science" />
        </div>
        <div className="sidebar-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image25.jpg" alt="Computer Science Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Computer Science</h1>
          <p>
            Our Department offers a comprehensive curriculum designed to equip students with the skills necessary for success in the rapidly evolving field of computer science.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Database Management Systems</li>
            <li>Web Development</li>
            <li>Software Engineering</li>
            <li>Machine Learning</li>
            <li>Operating Systems</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Hands-on Learning Experience with Modern Technologies</li>
            <li>Access to State-of-the-Art Labs and Resources</li>
            <li>Internship Opportunities with Leading Tech Companies</li>
            <li>Research Projects and Collaborative Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
