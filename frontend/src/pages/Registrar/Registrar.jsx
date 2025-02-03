import React from 'react';
import './Registrar.css'; // External CSS file for styling

export default function Registrar() {
  return (
    <div className="registrar-page-container">
      <header className="registrar-header">
        <h1>Office of the Registrar</h1>
        <h2>Welcome to the Registrar's Office</h2>
        <p>Your resource for academic records and registration services.</p>
      </header>

      <nav className="registrar-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#services">Services Offered</a></li>
          <li><a href="#policies">Policies</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="registrar-content">
        <section id="overview" className="registrar-section">
          <h2>Overview</h2>
          <img src="images/registrar_overview.png" alt="Registrar Overview" className="section-image" />
          <p>
            The Office of the Registrar is dedicated to maintaining the integrity and security of academic records. We provide essential registration services and support the academic mission of the College of Education.
          </p>
        </section>

        <section id="services" className="registrar-section">
          <h2>Services Offered</h2>
          <img src="images/services_offered.png" alt="Services Offered" className="section-image" />
          <p>We offer a variety of services, including:</p>
          <ul className="service-list">
            <li>Course registration and enrollment</li>
            <li>Transcripts and academic records</li>
            <li>Degree audits and certification</li>
            <li>Enrollment verification</li>
            <li>Transfer credit evaluation</li>
          </ul>
        </section>

        <section id="policies" className="registrar-section">
          <h2>Policies</h2>
          <img src="images/policies.png" alt="Policies" className="section-image" />
          <p>
            Our policies are designed to ensure fair and consistent practices in registration and record-keeping. Key policies include:
          </p>
          <ul>
            <li>Privacy of Student Records (FERPA)</li>
            <li>Registration deadlines and procedures</li>
            <li>Withdrawal and refund policies</li>
            <li>Appeals process for academic decisions</li>
          </ul>
        </section>

        <section id="contact" className="registrar-section">
          <h2>Contact Information</h2>
          <img src="images/contact_us.png" alt="Contact Us" className="section-image" />
          <p>
            For inquiries or further information, please contact the Office of the Registrar:
          </p>
          <ul>
            <li>Email: <a href="mailto:registrar@college.edu">registrar@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Administration Building, Room 202</li>
          </ul>
        </section>
      </main>

      {/* <footer className="registrar-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}