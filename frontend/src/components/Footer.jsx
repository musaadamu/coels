// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light py-4">
//       <Container>
//         <Row>
//           <Col md={4} className="mb-3">
//             <h4 className="text-white">About Us</h4>
//             <p className="text-secondary">
//               College of Education and Legal Studies, Nguru, is committed to academic excellence, fostering innovation, and building a brighter future
//               for our students.
//             </p>
//             <p className="text-secondary">
//               Our colleges consists of experienced professionals dedicated to providing holistic education that prepares students for future careers.
//             </p>
//           </Col>

//           <Col md={4} className="mb-3">
//             <h4 className="text-white">Contact Us</h4>
//             <p className="text-secondary">
//               Email: <a href="mailto:info@coels.edu" className="text-light">info@coels.edu</a>
//             </p>
//             <p className="text-secondary">Phone: 08066276806</p>
//             <p className="text-secondary">PMB 121, Along Nguru-Gashua Road, Nguru, Yobe State </p>
//             <p className="text-secondary">
//               Follow us on: 
//               <a href="#" className="text-light ms-2">Facebook</a> | 
//               <a href="#" className="text-light ms-2">Twitter</a> | 
//               <a href="#" className="text-light ms-2">Instagram</a>
//             </p>
//           </Col>

//           <Col md={4} className="mb-3">
//             <h4 className="text-white">Quick Links</h4>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-secondary">Admissions</a></li>
//               <li><a href="#" className="text-secondary">Programs</a></li>
//               <li><a href="#" className="text-secondary">Alumni</a></li>
//               <li><a href="#" className="text-secondary">Support Us</a></li>
//               <li><a href="#" className="text-secondary">Events</a></li>
//             </ul>
//           </Col>
//         </Row>

//         <Row className="text-center pt-3 border-top border-secondary">
//           <Col>
//             <p className="mb-0">&copy; 2024 College of Education and Legal Studies, Nguru. All Rights Reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="enhanced-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <Container>
          <Row className="footer-grid">
            {/* About Section */}
            <Col lg={3} md={6} sm={12} className="footer-col">
              <h5 className="footer-heading">About COELS</h5>
              <p className="footer-text">
                College of Education and Legal Studies, Nguru, is committed to academic excellence, innovation, and building leaders for the future.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon" title="Facebook">f</a>
                <a href="#" className="social-icon" title="Twitter">𝕏</a>
                <a href="#" className="social-icon" title="Instagram">📷</a>
                <a href="#" className="social-icon" title="LinkedIn">in</a>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={3} md={6} sm={12} className="footer-col">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#registration">Registration Portal</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#accommodation">Accommodation</a></li>
                <li><a href="#library">Library</a></li>
              </ul>
            </Col>

            {/* Resources */}
            <Col lg={3} md={6} sm={12} className="footer-col">
              <h5 className="footer-heading">Resources</h5>
              <ul className="footer-links">
                <li><a href="#calendar">Academic Calendar</a></li>
                <li><a href="#downloads">Downloads</a></li>
                <li><a href="#journals">Journals</a></li>
                <li><a href="#aper-forms">APER Forms</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#contact">Contact Directory</a></li>
              </ul>
            </Col>

            {/* Contact Section */}
            <Col lg={3} md={6} sm={12} className="footer-col">
              <h5 className="footer-heading">Contact Us</h5>
              <div className="contact-info">
                <p>
                  <span className="contact-icon">📍</span>
                  <strong>Address:</strong><br/>
                  PMB 121, Along Nguru-Gashua Road,<br/>
                  Nguru, Yobe State, Nigeria
                </p>
                <p>
                  <span className="contact-icon">📞</span>
                  <strong>Phone:</strong><br/>
                  +234 (0) 806 627 6806
                </p>
                <p>
                  <span className="contact-icon">📧</span>
                  <strong>Email:</strong><br/>
                  <a href="mailto:info@coels.edu.ng">info@coels.edu.ng</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>
          <Row className="footer-bottom-row">
            <Col md={6} className="footer-copyright">
              <p>&copy; 2024-2025 College of Education and Legal Studies, Nguru. All Rights Reserved.</p>
            </Col>
            <Col md={6} className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="divider">•</span>
              <a href="#terms">Terms of Use</a>
              <span className="divider">•</span>
              <a href="#sitemap">Sitemap</a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
}