import React from 'react';
import './StudentAffairs.css'; // External CSS file for styling

export default function StudentAffairs() {
  return (
    <div className="student-affairs-office-container">
      <header className="affairs-header">
        <h1>Welcome to the Student Affairs Office</h1>
        <p>Your resource for student services, support, and engagement.</p>
      </header>

      <nav className="affairs-nav">
        <ul>
          <li><a href="#resources">Office Resources</a></li>
          <li><a href="#services">Services Offered</a></li>
          <li><a href="#events">Upcoming Events</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <main className="affairs-content">
        <section id="resources" className="affairs-section">
          <h2>Office Resources</h2>
          <img src="images/image14.png" alt="Office Resources" className="section-image" />
          <p>
            Explore the resources available to support your academic and personal success.
          </p>
          <ul>
            <li><a href="/academic-support">Academic Support</a></li>
            <li><a href="/mental-health">Mental Health Services</a></li>
            <li><a href="/student-rights">Student Rights and Responsibilities</a></li>
            <li><a href="/financial-aid">Financial Aid Information</a></li>
          </ul>
        </section>

        <section id="services" className="affairs-section">
          <h2>Services Offered</h2>
          <img src="images/image15.png" alt="Services Offered" className="section-image" />
          <p>
            Our office provides a variety of services to enhance your student experience.
          </p>
          <ul>
            <li>Conflict Resolution Assistance</li>
            <li>Student Advocacy Programs</li>
            <li>Wellness Workshops</li>
            <li>Leadership Development Opportunities</li>
          </ul>
        </section>

        <section id="events" className="affairs-section">
          <h2>Upcoming Events</h2>
          <img src="images/image16.png" alt="Upcoming Events" className="section-image" />
          <p>
            Join us for our upcoming events designed to engage and support students.
          </p>
          <ul>
            <li>September 10: Mental Health Awareness Day</li>
            <li>October 15: Leadership Skills Workshop</li>
            <li>November 5: Student Advocacy Forum</li>
          </ul>
        </section>

        <section id="contact" className="affairs-section">
          <h2>Contact Us</h2>
          <img src="images/image17.png" alt="Contact Us" className="section-image" />
          <p>
            Have questions or need assistance? Reach out to our office!
          </p>
          <ul>
            <li>Email: <a href="mailto:studentaffairs@university.edu">studentaffairs@university.edu</a></li>
            <li>Phone: (123) 456-7890</li>
            <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
            <li>Location: Student Center, Room 101</li>
          </ul>
        </section>
      </main>

      {/* <footer className="affairs-footer">
        <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
}