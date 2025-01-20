import React from 'react';
import './Librarian.css'; // External CSS file for styling

export default function Librarian() {
  return (
    <div className="librarian-page-container">
      <header className="librarian-header">
        <h1>Office of the Librarian</h1>
        <h2>Librarian Name</h2>
        <p>College of Education and Legal Studies, Nguru</p>
      </header>

      <nav className="librarian-nav">
        <ul>
          <li><a href="#biography">Biography</a></li>
          <li><a href="#services">Library Services</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>

      <main className="librarian-content">
        <section id="biography" className="librarian-section">
          <h2>Biography</h2>
          <img src="images/librarian_image.jpg" alt="Librarian" className="section-image" />
          <p>
            [Librarian Name] has served as the Librarian since [Year]. With a passion for education and information accessibility, [he/she/they] is dedicated to fostering a supportive environment for learning and research.
          </p>
        </section>

        <section id="services" className="librarian-section">
          <h2>Library Services</h2>
          <img src="images/services_image.jpg" alt="Library Services" className="section-image" />
          <p>We offer a variety of services, including:</p>
          <ul>
            <li>Reference and research assistance</li>
            <li>Library orientation and tours</li>
            <li>Interlibrary loan services</li>
            <li>Workshops on information literacy</li>
            <li>Access to digital resources and databases</li>
          </ul>
        </section>

        <section id="resources" className="librarian-section">
          <h2>Library Resources</h2>
          <img src="images/resources_image.jpg" alt="Library Resources" className="section-image" />
          <p>
            The library offers a wide range of resources to support your academic needs, including:
          </p>
          <ul>
            <li>Books and e-books</li>
            <li>Academic journals and periodicals</li>
            <li>Multimedia materials</li>
            <li>Online databases and catalogs</li>
          </ul>
        </section>

        <section id="contact" className="librarian-section">
          <h2>Contact Information</h2>
          <img src="images/contact_image.jpg" alt="Contact Information" className="section-image" />
          <p>
            For inquiries or further information, please contact the Office of the Librarian:
          </p>
          <ul>
            <li>Email: <a href="mailto:librarian@college.edu">librarian@college.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Library Building, Room 101</li>
          </ul>
        </section>
      </main>

      {/* <footer className="librarian-footer">
        <p>&copy; {new Date().getFullYear()} College of Education. All rights reserved.</p>
      </footer> */}
    </div>
  );
}