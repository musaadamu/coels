import React from 'react';
import './Nce.css'; // External CSS file for styling

export default function Nce() {
  return (
    <div className="nce-programme-container">
      <header className="programme-header">
        <h1>NCE Programme</h1>
        <p>Your path to becoming a qualified educator.</p>
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
          <img src="images/image22.png" alt="Program Overview" className="section-image" />
          <p>
            The NCE Programme is designed to prepare students for a career in teaching by providing a solid foundation in educational principles and practices. The program emphasizes both theoretical knowledge and practical skills necessary for effective teaching.
          </p>
        </section>

        <section id="courses" className="programme-section">
          <h2>Course Offerings</h2>
          <img src="images/image23.png" alt="Course Offerings" className="section-image" />
          <p>Explore our diverse range of courses:</p>
          <ul className="course-list">
            <li>NCE in Early Childhood Education</li>
            <li>NCE in Primary Education</li>
            <li>NCE in Secondary Education</li>
            <li>NCE in Technical Education</li>
            <li>NCE in Adult and Continuing Education</li>
          </ul>
        </section>

        <section id="admissions" className="programme-section">
          <h2>Admission Requirements</h2>
          <img src="images/image24.png" alt="Admission Requirements" className="section-image" />
          <p>
            To apply for the NCE Programme, students must meet the following requirements:
          </p>
          <ul>
            <li>Completed application form</li>
            <li>Senior Secondary School Certificate or equivalent</li>
            <li>Personal statement</li>
            <li>Two letters of recommendation</li>
            <li>Interview (if required)</li>
          </ul>
        </section>

        <section id="contact" className="programme-section">
          <h2>Contact Us</h2>
          <img src="images/image25.png" alt="Contact Us" className="section-image" />
          <p>
            For more information about the NCE Programme, please reach out to us:
          </p>
          <ul>
            <li>Email: <a href="mailto:nce@university.edu">nce@university.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Education Building, Room 105</li>
          </ul>
        </section>
      </main>
{/* 
      <footer className="programme-footer">
        <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
}