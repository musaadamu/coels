import React from 'react';
import './LeadershipProfiles.css';

const LeadershipProfiles = () => {
  const leaders = [
    {
      title: 'Provost',
      name: 'Professor Ali Usman Manzo',
      office: 'Office of the Provost',
      bio: 'Leading the college with vision and excellence in academic and administrative affairs.',
      image: '/image33.jpg',
      email: 'provost@coels.edu.ng',
      
    },
    {
      title: 'Deputy Provost',
      name: 'Dr Muhammad Muhammad Ali',
      office: 'Office of the Deputy Provost',
      bio: 'Supporting institutional development and strategic initiatives.',
      image: '/images/image31.jpg',
      email: 'deputyprovost@coels.edu.ng',
      
    },
    {
      title: 'Registrar',
      name: 'Bukar Alhaji Musa',
      office: 'Registry Office',
      bio: 'Managing academic records, admissions, and student services.',
      image: '/images/image32.jpg',
      email: 'registrar@coels.edu.ng',
      
    },
    {
      title: 'Director of Academic Planning',
      name: 'Maidunoma Zanna',
      office: 'Academic Planning',
      bio: 'Overseeing curriculum development and academic excellence.',
      image: '/images/image29.jpg',
      email: 'academics@coels.edu.ng',
      
    },
    {
      title: 'Bursar',
      name: 'Ibrahim Tanko Nguru',
      office: 'Office of the Bursar',
      bio: 'Managing the financial operations of the institution.',
      image: '/images/image34.jpg',
      email: 'bursar@coels.edu.ng',
      
    },
    {
      title: 'Head of Works',
      name: 'Ibrahim Yakubu Haruna',
      office: 'Works Department',
      bio: 'Overseeing maintenance, works, and infrastructure development.',
      image: '/images/image35.jpg',
      email: 'works@coels.edu.ng',
      
    },
    {
      title: 'Chief Librarian',
      name: 'Haladu Al-Badamasi',
      office: 'Library Department',
      bio: 'Leading library services, resources, and academic information support.',
      image: '/images/image36.jpg',
      email: 'library@coels.edu.ng',
    
    }
  ];

  return (
    <section className="leadership-section">
      <div className="leadership-container">
        {/* Section Header */}
        <div className="leadership-header">
          <span className="leadership-eyebrow">👥 LEADERSHIP</span>
          <h2 className="leadership-title">
            Management & <span className="leadership-accent">Leadership Team</span>
          </h2>
          <p className="leadership-subtitle">
            Meet the dedicated professionals guiding our institution toward excellence
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leadership-card">
              {/* Image Section */}
              <div className="leader-image-wrapper">
                <div className="leader-image-container">
                  <img src={leader.image} alt={leader.name} className="leader-image" />
                  <div className="leader-overlay"></div>
                </div>
                <div className="leader-icon" style={{
                  background: index % 2 === 0 
                    ? 'linear-gradient(45deg, #2193b0, #6dd5ed)' 
                    : 'linear-gradient(45deg, #FF512F, #F09819)'
                }}>
                  <span>{leader.icon}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="leader-content">
                <span className="leader-badge">{leader.title.toUpperCase()}</span>
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-office">{leader.office}</p>
                <p className="leader-bio">{leader.bio}</p>

                {/* Contact */}
                <div className="leader-contact">
                  <a href={`mailto:${leader.email}`} className="leader-email-btn">
                    <span>📧</span> Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info Box */}
        <div className="leadership-contact-box">
          <h3>Administrative Offices</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Main Office</strong>
                <p>College of Education and Legal Studies, Nguru</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Contact</strong>
                <p>+234 (0) XXX XXX XXXX</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>admin@coels.edu.ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfiles;
