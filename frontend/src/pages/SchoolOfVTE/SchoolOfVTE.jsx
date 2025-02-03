
import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolOfVTE.css'; // External CSS file for styling

export default function SchoolOfVTE() {
  
  return (
    <div className="law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image27.jpg" alt="School of Vocational and Technical Education" />
        </div>
        <div className="sidebar-links">
          <h3>Departments</h3>
          <ul>
            <li>
              <Link to="/business-education">Department of Business Education</Link>
            </li>
            <li>
              <Link to="/home-management">Department of Home Management</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Vocational and Technical Education Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the School of Vocational and Technical Education</h1>
          <p>
            Our School focuses on providing practical and theoretical knowledge in vocational and technical fields, preparing students for successful careers.
          </p>
          <h2>What We Offer:</h2>
          <ul>
            <li>Hands-on Training in Business Education and Home Management</li>
            <li>Experienced Instructors with Industry Expertise</li>
            <li>Internship Opportunities and Career Counseling</li>
            <li>Workshops and Skill Development Programs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
