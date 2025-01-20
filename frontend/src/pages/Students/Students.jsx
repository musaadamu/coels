import React from 'react';
import './Student.css'; // External CSS file for styling

export default function Student() {
  return (
    <div className="student-page-container">
      <header className="student-header">
        <h1>Welcome to the Student Portal</h1>
        <p>Your gateway to resources, events, and academic support.</p>
      </header>

      <nav className="student-nav">
        <ul>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#calendar">Academic Calendar</a></li>
          <li><a href="#events">Upcoming Events</a></li>
          <li><a href="#support">Student Support</a></li>
        </ul>
      </nav>

      <main className="student-content">
        <section id="resources" className="student-section">
          <h2>Student Resources</h2>
          <img src="images/image10.png" alt="Student Resources" className="section-image" />
          <p>
            Access a variety of resources including library services, academic advising, and tutoring programs.
          </p>
          <ul>
            <li><a href="/library">Library Services</a></li>
            <li><a href="/advising">Academic Advising</a></li>
            <li><a href="/tutoring">Tutoring Programs</a></li>
            <li><a href="/career-services">Career Services</a></li>
          </ul>
        </section>

        <section id="calendar" className="student-section">
          <h2>Academic Calendar</h2>
          <img src="images/image11.png" alt="Academic Calendar" className="section-image" />
          <p>
            Stay updated with important dates for the semester, including registration deadlines, exam schedules, and holidays.
          </p>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>August 30</td>
                <td>Fall Semester Begins</td>
              </tr>
              <tr>
                <td>November 15</td>
                <td>Last Day to Withdraw</td>
              </tr>
              <tr>
                <td>December 10</td>
                <td>Final Exams</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="events" className="student-section">
          <h2>Upcoming Events</h2>
          <img src="images/image12.png" alt="Upcoming Events" className="section-image" />
          <p>
            Don’t miss out on these exciting opportunities to engage with your peers and faculty!
          </p>
          <ul>
            <li>September 5: Welcome Back BBQ</li>
            <li>October 10: Career Fair</li>
            <li>November 20: Thanksgiving Celebration</li>
          </ul>
        </section>

        <section id="support" className="student-section">
          <h2>Student Support</h2>
          <img src="images/image13.png" alt="Student Support" className="section-image" />
          <p>
            We are here to help! Access counseling services, wellness resources, and academic support.
          </p>
          <ul>
            <li><a href="/counseling">Counseling Services</a></li>
            <li><a href="/wellness">Wellness Resources</a></li>
            <li><a href="/disability-services">Disability Services</a></li>
          </ul>
        </section>
      </main>

      {/* <footer className="student-footer">
        <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
}