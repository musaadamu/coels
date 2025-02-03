import React from 'react';
import './AdmissionOffice.css'; // External CSS file for styling

export default function AdmissionOffice() {
  return (
    <div className="admissions-page-container">
      <header className="admissions-header">
        <h1>Admissions Office</h1>
        <h2>College of Education and Legal Studies</h2>
        <p>Your Gateway to Higher Education</p>
      </header>

      <nav className="admissions-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#process">Admissions Process</a></li>
          <li><a href="#requirements">Admission Requirements</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="admissions-content">
        <section id="overview" className="admissions-section">
          <h2>Overview</h2>
          <img src="images/admissions_overview.jpg" alt="Admissions Overview" className="section-image" />
          <p>
            The Admissions Office is dedicated to guiding prospective students through the admissions process. Our mission is to provide comprehensive support and information to help you make informed decisions about your educational journey.
          </p>
        </section>

        <section id="process" className="admissions-section">
          <h2>Admissions Process</h2>
          <img src="images/admissions_process.jpg" alt="Admissions Process" className="section-image" />
          <p>The admissions process involves several key steps:</p>
          <ul>
            <li>Complete the online application form.</li>
            <li>Submit required documents, including transcripts and identification.</li>
            <li>Schedule and attend an admissions interview (if applicable).</li>
            <li>Receive notification of admission status.</li>
            <li>Confirm acceptance and finalize enrollment.</li>
          </ul>
        </section>

        <section id="requirements" className="admissions-section">
          <h2>Admission Requirements</h2>
          <img src="images/admissions_requirements.jpg" alt="Admission Requirements" className="section-image" />
          <p>To apply for admission, candidates must meet the following requirements:</p>
          <ul>
            <li>High school diploma or equivalent.</li>
            <li>Minimum GPA of 2.5 on a 4.0 scale.</li>
            <li>Completed application form with personal statement.</li>
            <li>Letters of recommendation (if required).</li>
            <li>Proof of English language proficiency (for international students).</li>
          </ul>
        </section>

        <section id="contact" className="admissions-section">
          <h2>Contact Information</h2>
          <img src="images/contact_image.jpg" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the Admissions Office:
          </p>
          <ul>
            <li>Email: <a href="mailto:admissions@college.edu">admissions@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Admissions Building, Room 101</li>
          </ul>
        </section>
      </main>

      {/* <footer className="admissions-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}