import React from 'react';
import { Link } from 'react-router-dom';
import './ShariaCivilLaw.css'; // External CSS file for styling

export default function ShariaCivilLaw() {
  return (
    <div className="sharia-civil-law-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src="images/image26.jpg" alt="Department of Sharia and Civil Law" />
        </div>
        <div className="sidebar-links">
          <h3>Department of Sharia and Civil Law</h3>
          <ol>
            <li>
              <Link to="/sharia-civil-law-course-catalog">Course Catalog</Link>
            </li>
            <li>
              <Link to="/sharia-civil-law-faculty">Faculty</Link>
            </li>
            <li>
              <Link to="/sharia-civil-law-admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/sharia-civil-law-research">Research</Link>
            </li>
            <li>
              <Link to="/sharia-civil-law-events">Events and Seminars</Link>
            </li>
            <li>
              <Link to="/sharia-civil-law-contact">Contact Us</Link>
            </li>
          </ol>
        </div>
      </div>

      <div className="main-content">
        <div className="main-image">
          <img src="images/image20.jpg" alt="Sharia and Civil Law Overview" />
        </div>
        <div className="main-text">
          <h1>Welcome to the Department of Sharia and Civil Law</h1>
          <p>
            The Department of Sharia and Civil Law aims to equip students with an understanding of both Islamic law and civil law systems. Our programs prepare graduates for various legal careers, emphasizing ethical practices and social justice.
          </p>

          <h2>Course Listings:</h2>
          <ul className="course-list">
            <li>Introduction to Sharia Law</li>
            <li>Comparative Civil Law</li>
            <li>Islamic Jurisprudence</li>
            <li>Family Law in Islam</li>
            <li>Commercial Transactions in Sharia</li>
            <li>Human Rights in Islamic Law</li>
            <li>Dispute Resolution in Sharia and Civil Law</li>
          </ul>

          <h2>What We Offer:</h2>
          <ul>
            <li>Access to Islamic and Civil Law Libraries</li>
            <li>Internships with Legal Firms and NGOs</li>
            <li>Faculty with Expertise in Sharia and Civil Law</li>
            <li>Participation in Legal Clinics and Community Outreach</li>
          </ul>
        </div>
      </div>
    </div>
  );
}