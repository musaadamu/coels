import React from 'react';
import './Provost.css'; // External CSS file for styling

export default function Provost() {
  return (
    <div className="provost-page-container">
      <header className="provost-header">
        <h1>Office of the Provost</h1>
        <h2>Mohammed Kachallah</h2>
        <p>College of Education and Legal Studies, Nguru</p>
      </header>

      <nav className="provost-nav">
        <ul>
          <li><a href="#biography">Biography</a></li>
          <li><a href="#vision">Vision & Goals</a></li>
          <li><a href="#initiatives">Current Initiatives</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="provost-content">
        <section id="biography" className="provost-section">
          <h2>Biography</h2>
          <img src="images/image6.jpg" alt="Provost" className="section-image" />
          <p>
            Dr. [First Last Name] has served as the Provost since [Year]. With over [X] years of experience in higher education, Dr. [Last Name] is committed to fostering a vibrant academic community that promotes excellence in teaching, research, and service.
          </p>
        </section>

        <section id="vision" className="provost-section">
          <h2>Vision & Goals</h2>
          <img src="images/image9.jpg" alt="Vision and Goals" className="section-image" />
          <p>
            The vision of the College of Education is to be a leader in preparing competent and compassionate educators. Our goals include:
          </p>
          <ul>
            <li>Enhancing student learning outcomes through innovative teaching practices.</li>
            <li>Promoting research and scholarship that addresses critical issues in education.</li>
            <li>Fostering partnerships with local schools and communities to improve educational access.</li>
          </ul>
        </section>

        <section id="initiatives" className="provost-section">
          <h2>Current Initiatives</h2>
          <img src="images/initiatives_image.png" alt="Current Initiatives" className="section-image" />
          <p>
            Dr. [Last Name] is leading several initiatives to enhance the educational experience, including:
          </p>
          <ul>
            <li>Implementation of a new mentorship program for student teachers.</li>
            <li>Expansion of online learning resources and professional development workshops.</li>
            <li>Collaboration with community organizations to support educational equity.</li>
          </ul>
        </section>

        <section id="contact" className="provost-section">
          <h2>Contact Information</h2>
          <img src="images/contact_image.png" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the Office of the Provost:
          </p>
          <ul>
            <li>Email: <a href="mailto:provost@college.edu">provost@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Main Administration Building, Room 101</li>
          </ul>
        </section>
      </main>

      {/* <footer className="provost-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}