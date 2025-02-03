import React from 'react';
import { Link } from 'react-router-dom';
import './PeaceConflictResolution.css'; // External CSS file for styling

export default function PeaceConflictResolution() {
  return (
    <div className="peace-conflict-resolution-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image20.jpg" alt="Department of Peace and Conflict Resolution" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Peace and Conflict Resolution</h3>
          <ol>
            <li>
              <Link to="/peace-conflict-resolution-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/peace-conflict-resolution-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/peace-conflict-resolution-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/peace-conflict-resolution-research">Research</Link>
            </li>
            <li>
              <Link to="/peace-conflict-resolution-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/peace-conflict-resolution-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image23.jpg" alt="Peace and Conflict Resolution Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Peace and Conflict Resolution</h1>
          <p>
            The Department of Peace and Conflict Resolution focuses on understanding the roots of conflict and developing strategies for effective resolution and peacebuilding. Our programs prepare students to become leaders in promoting social justice, reconciliation, and sustainable peace in communities and nations.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Peace Studies</li>
            <li>Theories of Conflict Resolution</li>
            <li>Mediation and Negotiation Skills</li>
            <li>Peacebuilding in Post-conflict Societies</li>
            <li>Human Rights and Conflict Management</li>
            <li>Research Methods in Peace Studies</li>
            <li>Community-Based Conflict Resolution</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Internship Opportunities with NGOs and International Organizations</li>
            <li>Workshops on Conflict Mediation and Peacebuilding</li>
            <li>Access to Peace Studies Research Resources</li>
            <li>Cultural Exchange Programs and Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
}