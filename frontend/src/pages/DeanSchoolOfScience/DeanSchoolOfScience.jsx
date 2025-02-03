
import React from 'react';
import { Link } from 'react-router-dom';
import './DeanSchoolOfScience.css';

export default function DeanSchoolOfScience() {
  return (
    <div className="science-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="/images/image27.jpg" alt="Science Building" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/department-computer-science">Department of Computer Science</Link>
            </li>
            <li>
              <Link to="/integrated-science">Department of Integrated Science</Link>
            </li>
            <li>
              <Link to="/department-mathematics">Department of Mathematics</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="/images/image25.jpg" alt="Science Students" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of Sciences</h1>
          <p>
            Our School of Sciences is dedicated to fostering innovation and scientific inquiry. We offer top-notch education across key scientific disciplines.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Cutting-edge Computer Science Programs</li>
            <li>Robust Integrated Science Curriculum</li>
            <li>Comprehensive Mathematics Education</li>
            <li>Research and Practical Laboratory Work</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
