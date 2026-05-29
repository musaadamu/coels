import React from 'react';
import { Container } from 'react-bootstrap';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="enhanced-footer">

      {/* ── Main content ── */}
      <div className="footer-main">
        <Container>
          <div className="footer-grid">

            {/* About */}
            <div className="footer-col">
              <h5 className="footer-heading">About COELS</h5>
              <p className="footer-text">
                College of Education and Legal Studies, Nguru, is committed to
                academic excellence, innovation, and building leaders for the future.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" className="social-icon" title="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://x.com" className="social-icon" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter />
                </a>
                <a href="https://instagram.com" className="social-icon" title="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#registration">Registration Portal</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#accommodation">Accommodation</a></li>
                <li><a href="#library">Library</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-col">
              <h5 className="footer-heading">Resources</h5>
              <ul className="footer-links">
                <li><a href="#calendar">Academic Calendar</a></li>
                <li><a href="#downloads">Downloads</a></li>
                <li><a href="#journals">Journals</a></li>
                <li><a href="#aper-forms">APER Forms</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#contact">Contact Directory</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h5 className="footer-heading">Contact Us</h5>
              <div className="contact-info">
                <p>
                  <span className="contact-icon"><FaMapMarkerAlt /></span>
                  <span>
                    <strong>Address</strong>
                    PMB 121, Along Nguru-Gashua Road,<br />
                    Nguru, Yobe State, Nigeria
                  </span>
                </p>
                <p>
                  <span className="contact-icon"><FaPhone /></span>
                  <span>
                    <strong>Phone</strong>
                    +234 (0) 806 627 6806
                  </span>
                </p>
                <p>
                  <span className="contact-icon"><FaEnvelope /></span>
                  <span>
                    <strong>Email</strong>
                    <a href="mailto:info@coels.edu.ng">info@coels.edu.ng</a>
                  </span>
                </p>
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-row">
            <div className="footer-copyright">
              <p>
                &copy; 2024–{currentYear} College of Education and Legal Studies, Nguru.
                All Rights Reserved.
              </p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="divider">•</span>
              <a href="#terms">Terms of Use</a>
              <span className="divider">•</span>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  );
}