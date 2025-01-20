import React from 'react';
import './OpenRegistry.css'; // External CSS file for styling

export default function OpenRegistry() {
  return (
    <div className="open-register-page-container">
      <header className="open-register-header">
        <h1>Open Register Unit</h1>
        <h2>College of Education and Legal Studies</h2>
        <p>Facilitating Access to Educational Resources</p>
      </header>

      <nav className="open-register-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#services">Services Offered</a></li>
          <li><a href="#policies">Policies</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="open-register-content">
        <section id="overview" className="open-register-section">
          <h2>Overview</h2>
          <img src="images/open_register_overview.jpg" alt="Open Register Overview" className="section-image" />
          <p>
            The Open Register Unit is dedicated to providing resources and support for students and faculty to enhance educational access and success. We strive to foster an inclusive environment that promotes learning and academic achievement.
          </p>
        </section>

        <section id="services" className="open-register-section">
          <h2>Services Offered</h2>
          <img src="images/services_image.jpg" alt="Services Offered" className="section-image" />
          <p>We offer a variety of services, including:</p>
          <ul>
            <li>Registration assistance for courses and programs.</li>
            <li>Guidance on academic policies and procedures.</li>
            <li>Support for transferring credits and course evaluation.</li>
            <li>Access to academic resources and materials.</li>
            <li>Workshops on registration processes and requirements.</li>
          </ul>
        </section>

        <section id="policies" className="open-register-section">
          <h2>Policies</h2>
          <img src="images/policies_image.jpg" alt="Policies" className="section-image" />
          <p>
            Our policies ensure a fair and efficient registration process. Key policies include:
          </p>
          <ul>
            <li>Course Registration Policy</li>
            <li>Withdrawal and Refund Policy</li>
            <li>Transfer Credit Policy</li>
            <li>Academic Integrity Policy</li>
            <li>Privacy Policy for Student Records</li>
          </ul>
        </section>

        <section id="contact" className="open-register-section">
          <h2>Contact Information</h2>
          <img src="images/contact_image.jpg" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the Open Register Unit:
          </p>
          <ul>
            <li>Email: <a href="mailto:openregister@college.edu">openregister@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Administration Building, Room 405</li>
          </ul>
        </section>
      </main>

      {/* <footer className="open-register-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}