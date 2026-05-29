import React from 'react';
import './AcademicCalendarSection.css';

const AcademicCalendarSection = () => {
  const calendarEvents = [
    { date: 'September 1, 2024', event: 'Academic Session Begins', type: 'start', icon: '🎓' },
    { date: 'October 15, 2024', event: 'Mid-Semester Examination', type: 'exam', icon: '📝' },
    { date: 'December 20, 2024', event: 'First Semester Ends', type: 'end', icon: '✅' },
    { date: 'January 15, 2025', event: 'Second Semester Begins', type: 'start', icon: '📚' },
    { date: 'March 10, 2025', event: 'Mid-Semester Examination', type: 'exam', icon: '✏️' },
    { date: 'May 25, 2025', event: 'Academic Session Ends', type: 'end', icon: '🎉' },
  ];

  return (
    <section className="academic-calendar-section">
      <div className="academic-calendar-container">
        {/* Section Header */}
        <div className="calendar-header">
          <span className="calendar-eyebrow">📅 ACADEMIC SCHEDULE</span>
          <h2 className="calendar-title">
            Academic <span className="calendar-accent">Calendar 2024/2025</span>
          </h2>
          <p className="calendar-subtitle">
            Important dates and key events for the current academic session
          </p>
        </div>

        {/* Calendar Download Button */}
        <div className="calendar-download-area">
          <button className="download-calendar-btn">
            <span className="btn-icon">📥</span>
            <span className="btn-text">Download Full Calendar</span>
          </button>
          <p className="calendar-note">Available in PDF format - Print friendly</p>
        </div>

        {/* Events Timeline */}
        <div className="calendar-timeline">
          {calendarEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" style={{ 
                background: event.type === 'start' 
                  ? 'linear-gradient(45deg, #11998e, #38ef7d)' 
                  : event.type === 'exam'
                  ? 'linear-gradient(45deg, #FF512F, #F09819)'
                  : 'linear-gradient(45deg, #2193b0, #6dd5ed)'
              }}>
                <span>{event.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-event">{event.event}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="calendar-info-box">
          <div className="info-box-item">
            <span className="info-box-icon">ℹ️</span>
            <p>Contact the Registrar's Office for any clarifications regarding academic calendar dates and schedules.</p>
          </div>
          <div className="info-box-item">
            <span className="info-box-icon">📞</span>
            <p>Registrar's Office | Phone: (Contact Number) | Email: registrar@coels.edu.ng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendarSection;
