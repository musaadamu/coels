import React from 'react';
import './Establishment.css'; // External CSS file for styling

export default function Establishment() {
  return (
    <div className="establishment-page-container">
      <header className="establishment-header">
        <h1>Establishment Office</h1>
        <h2>College of Education and Legal Studies</h2>
        <p>Supporting Institutional Development and Administration</p>
      </header>

      <nav className="establishment-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#services">Services Offered</a></li>
          <li><a href="#policies">Policies</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="establishment-content">
        <section id="overview" className="establishment-section">
          <h2>Overview</h2>
          <img src="images/establishment_overview.jpg" alt="Establishment Overview" className="section-image" />
          <p>
            The Establishment Office is responsible for the management of human resources and institutional development within the College of Education. Our mission is to ensure effective administration and optimal functioning of the college.
          </p>
        </section>

        <section id="services" className="establishment-section">
          <h2>Services Offered</h2>
          <img src="images/services_image.jpg" alt="Services Offered" className="section-image" />
          <p>We provide a range of services, including:</p>
          <ul>
            <li>Recruitment and staffing support.</li>
            <li>Employee training and development programs.</li>
            <li>Management of staff records and benefits.</li>
            <li>Policy development and implementation.</li>
            <li>Support for institutional initiatives and projects.</li>
          </ul>
        </section>

        <section id="policies" className="establishment-section">
          <h2>Policies</h2>
          <img src="images/policies_image.jpg" alt="Policies" className="section-image" />
          <p>
            Our policies are designed to promote fair and effective human resource management. Key policies include:
          </p>
          <ul>
            <li>Human Resource Management Policy</li>
            <li>Equal Employment Opportunity Policy</li>
            <li>Staff Performance Evaluation Policy</li>
            <li>Leave of Absence Policy</li>
            <li>Code of Conduct for Staff</li>
          </ul>
        </section>

        <section id="contact" className="establishment-section">
          <h2>Contact Information</h2>
          <img src="images/contact_image.jpg" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the Establishment Office:
          </p>
          <ul>
            <li>Email: <a href="mailto:establishment@college.edu">establishment@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Administration Building, Room 402</li>
          </ul>
        </section>
      </main>

      {/* <footer className="establishment-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}