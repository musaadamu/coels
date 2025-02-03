import React from 'react';
import './Staff.css'; // External CSS file for styling

export default function Staff() {
  return (
    <div className="staff-page-container">
      <header className="staff-header">
        <h1>Office of Staff</h1>
        <h2>Meet Our Dedicated Staff</h2>
        <p>College of Education and Legal Studies, Nguru</p>
      </header>

      <nav className="staff-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#roles">Staff Roles</a></li>
          <li><a href="#services">Services Offered</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="staff-content">
        <section id="overview" className="staff-section">
          <h2>Overview</h2>
          <img src="images/overview_image.jpg" alt="Staff Overview" className="section-image" />
          <p>
            The Office of Staff plays a crucial role in supporting the academic and administrative functions of the College of Education. Our dedicated team is here to assist students and faculty with various needs.
          </p>
        </section>

        <section id="roles" className="staff-section">
          <h2>Staff Roles</h2>
          <img src="images/roles_image.jpg" alt="Staff Roles" className="section-image" />
          <p>Our staff members serve in various roles, including:</p>
          <ul>
            <li>Administrative Assistants</li>
            <li>Academic Advisors</li>
            <li>Financial Aid Officers</li>
            <li>IT Support Specialists</li>
            <li>Student Service Coordinators</li>
          </ul>
        </section>

        <section id="services" className="staff-section">
          <h2>Services Offered</h2>
          <img src="images/services_image.jpg" alt="Services Offered" className="section-image" />
          <p>We provide a range of services to support the academic community, including:</p>
          <ul>
            <li>Student enrollment and registration assistance</li>
            <li>Academic advising and counseling</li>
            <li>Financial aid application guidance</li>
            <li>Technical support for faculty and students</li>
            <li>Workshops and training sessions</li>
          </ul>
        </section>

        <section id="contact" className="staff-section">
          <h2>Contact Information</h2>
          <img src="images/contact_image.jpg" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the Office of Staff:
          </p>
          <ul>
            <li>Email: <a href="mailto:staff@college.edu">staff@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Administration Building, Room 303</li>
          </ul>
        </section>
      </main>

      {/* <footer className="staff-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}