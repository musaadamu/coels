import React from 'react';
import './ExamsRecords.css'; // External CSS file for styling

export default function ExamsRecords() {
  return (
    <div className="exams-records-page-container">
      <header className="exams-records-header">
        <h1>Exams and Records Unit</h1>
        <h2>College of Education and Legal Studies</h2>
        <p>Ensuring Academic Integrity and Excellence</p>
      </header>

      <nav className="exams-records-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#services">Services Offered</a></li>
          <li><a href="#policies">Policies</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="exams-records-content">
        <section id="overview" className="exams-records-section">
          <h2>Overview</h2>
          <img src="images/exams_overview.jpg" alt="Exams Overview" className="section-image" />
          <p>
            The Exams and Records Unit is responsible for the administration of examinations and the maintenance of academic records for all students. Our goal is to ensure the integrity and accuracy of academic assessments and records.
          </p>
        </section>

        <section id="services" className="exams-records-section">
          <h2>Services Offered</h2>
          <img src="images/services_image.jpg" alt="Services Offered" className="section-image" />
          <p>We provide a variety of essential services, including:</p>
          <ul>
            <li>Scheduling and administration of examinations.</li>
            <li>Issuance of transcripts and academic records.</li>
            <li>Management of exam results and grading.</li>
            <li>Support for students with exam-related inquiries.</li>
            <li>Coordination of academic appeals and grievances.</li>
          </ul>
        </section>

        <section id="policies" className="exams-records-section">
          <h2>Policies</h2>
          <img src="images/policies_image.jpg" alt="Policies" className="section-image" />
          <p>
            Our policies ensure fair and transparent examination processes. Key policies include:
          </p>
          <ul>
            <li>Academic Integrity Policy</li>
            <li>Examination Conduct Guidelines</li>
            <li>Record Retention Policy</li>
            <li>Appeals Process for Academic Decisions</li>
            <li>Privacy Policy for Student Records</li>
          </ul>
        </section>

        <section id="contact" className="exams-records-section">
          <h2>Contact Information</h2>
          <img src="images/contact_image.jpg" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the Exams and Records Unit:
          </p>
          <ul>
            <li>Email: <a href="mailto:exams@college.edu">exams@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Administration Building, Room 305</li>
          </ul>
        </section>
      </main>

      {/* <footer className="exams-records-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}