import React from 'react';
import './Tetfund.css'; // External CSS file for styling

export default function Tetfund() {
  return (
    <div className="tetfund-page-container">
      <header className="tetfund-header">
        <h1>Tertiary Education Trust Fund (TETFUND)</h1>
        <h2>Empowering Education in Nigeria</h2>
        <p>College of Education and Legal Studies, Nguru</p>
      </header>

      <nav className="tetfund-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#objectives">Objectives</a></li>
          <li><a href="#funding">Funding Opportunities</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="tetfund-content">
        <section id="overview" className="tetfund-section">
          <h2>Overview</h2>
          <img src="images/tetfund_overview.jpg" alt="TETFUND Overview" className="section-image" />
          <p>
            The Tertiary Education Trust Fund (TETFUND) is a government agency established to provide financial support for the development of tertiary education in Nigeria. It aims to enhance the quality of education and promote research initiatives in institutions of higher learning.
          </p>
        </section>

        <section id="objectives" className="tetfund-section">
          <h2>Objectives</h2>
          <img src="images/tetfund_objectives.jpg" alt="TETFUND Objectives" className="section-image" />
          <p>The key objectives of TETFUND include:</p>
          <ul>
            <li>Supporting the development of educational infrastructure.</li>
            <li>Enhancing the quality of teaching and research.</li>
            <li>Promoting academic programs that meet national needs.</li>
            <li>Providing scholarships and funding for students.</li>
            <li>Encouraging partnerships between institutions and industries.</li>
          </ul>
        </section>

        <section id="funding" className="tetfund-section">
          <h2>Funding Opportunities</h2>
          <img src="images/tetfund_funding.jpg" alt="Funding Opportunities" className="section-image" />
          <p>
            TETFUND offers various funding opportunities, including:
          </p>
          <ul>
            <li>Research grants for faculty and students.</li>
            <li>Infrastructure development funding for institutions.</li>
            <li>Capacity building programs and workshops.</li>
            <li>Support for academic conferences and seminars.</li>
            <li>Scholarship programs for deserving students.</li>
          </ul>
        </section>

        <section id="contact" className="tetfund-section">
          <h2>Contact Information</h2>
          <img src="images/tetfund_contact.jpg" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the TETFUND office:
          </p>
          <ul>
            <li>Email: <a href="mailto:tetfund@college.edu">tetfund@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Administrative Block, Room 204</li>
          </ul>
        </section>
      </main>

      {/* <footer className="tetfund-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}