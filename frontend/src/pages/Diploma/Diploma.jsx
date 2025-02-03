import React from 'react';
import './Diploma.css'; // External CSS file for styling

export default function Diploma() {
  return (
    <div className="diploma-programme-container">
      <header className="programme-header">
        <h1>Diploma Programme</h1>
        <p>Your pathway to professional development and skill enhancement.</p>
      </header>

      <nav className="programme-nav">
        <ul>
          <li><a href="#overview">Program Overview</a></li>
          <li><a href="#courses">Course Offerings</a></li>
          <li><a href="#admissions">Admission Requirements</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <main className="programme-content">
        <section id="overview" className="programme-section">
          <h2>Program Overview</h2>
          <img src="images/image18.png" alt="Program Overview" className="section-image" />
          <p>
            The Diploma Programme offers a comprehensive curriculum designed to equip students with essential skills and knowledge in their chosen field. Our program focuses on practical training and theoretical foundations to prepare graduates for the workforce.
          </p>
        </section>

        <section id="courses" className="programme-section">
          <h2>Course Offerings</h2>
          <img src="images/image19.png" alt="Course Offerings" className="section-image" />
          <p>Explore our diverse range of courses:</p>
          <ul className="course-list">
            <li>Diploma in Business Administration</li>
            <li>Diploma in Information Technology</li>
            <li>Diploma in Graphic Design</li>
            <li>Diploma in Event Management</li>
            <li>Diploma in Hospitality Management</li>
          </ul>
        </section>

        <section id="admissions" className="programme-section">
          <h2>Admission Requirements</h2>
          <img src="images/image20.png" alt="Admission Requirements" className="section-image" />
          <p>
            To apply for the Diploma Programme, students must meet the following requirements:
          </p>
          <ul>
            <li>Completed application form</li>
            <li>High school diploma or equivalent</li>
            <li>Personal statement</li>
            <li>Two letters of recommendation</li>
            <li>Interview (if required)</li>
          </ul>
        </section>

        <section id="contact" className="programme-section">
          <h2>Contact Us</h2>
          <img src="images/image21.png" alt="Contact Us" className="section-image" />
          <p>
            For more information about the Diploma Programme, please reach out to us:
          </p>
          <ul>
            <li>Email: <a href="mailto:diploma@university.edu">diploma@university.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Academic Building, Room 202</li>
          </ul>
        </section>
      </main>

      {/* <footer className="programme-footer">
        <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
}