import React from 'react';
import './AcademicCalendarSection.css';

const AcademicCalendarSection = () => {
  const calendarEvents = [
    { date: '8 Dec 2025', event: 'Commencement of Registration Exercise (2025/2026)', type: 'start', icon: '🗓️' },
    { date: '15 Dec 2025', event: 'Commencement of Lectures (First Semester)', type: 'start', icon: '🎓' },
    { date: '5 Jan 2026', event: 'Late Registration Period', type: 'exam', icon: '📝' },
    { date: '9 Mar 2026', event: 'Ramadan Break', type: 'end', icon: '🌙' },
    { date: '13 Apr 2026', event: 'First Semester Examinations', type: 'exam', icon: '✍️' },
    { date: '11 May 2026', event: 'Commencement and Ending of Second Semester Lectures', type: 'start', icon: '📚' },
    { date: '24 Aug 2026', event: 'Second Semester Examinations', type: 'exam', icon: '📝' },
    { date: '14 Sep 2026', event: 'SIWES and Court Attachment Period (Diploma)', type: 'start', icon: '🏗️' },
    { date: '28 Sep 2026', event: 'External Moderation & Consideration of Results', type: 'end', icon: '✅' },
  ];

  return (
    <section className="academic-calendar-section">
      <div className="academic-calendar-container">
        {/* Section Header */}
        <div className="calendar-header">
          <span className="calendar-eyebrow">📅 ACADEMIC SCHEDULE</span>
          <h2 className="calendar-title">
            Academic <span className="calendar-accent">Calendar 2025/2026</span>
          </h2>
          <p className="calendar-subtitle">
            Important dates and key events for the current academic session
          </p>
        </div>

        {/* Calendar Download Button */}
        <div className="calendar-download-area">
          <a
            className="download-calendar-btn"
            href="/downloads/Proposed_2025_2026_Calendar_Updated.docx"
            download="Proposed_2025_2026_Calendar_Updated.docx"
          >
            <span className="btn-icon">📥</span>
            <span className="btn-text">Download Full Calendar</span>
          </a>
          <p className="calendar-note">Download the full calendar (DOCX)</p>
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
