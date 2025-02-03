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

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3"> {/* Reduced vertical padding */}
      <Container>
        <Row>
          <Col md={4} className="mb-2"> {/* Reduced bottom margin */}
            <h4 className="text-white">About Us</h4>
            <p className="text-secondary">
              College of Education and Legal Studies, Nguru, is committed to academic excellence, fostering innovation, and building a brighter future for our students.
            </p>
          </Col>

          <Col md={4} className="mb-2"> {/* Reduced bottom margin */}
            <h4 className="text-white">Contact Us</h4>
            <p className="text-secondary">
              Email: <a href="mailto:info@coels.edu" className="text-light">info@coels.edu</a>
            </p>
            <p className="text-secondary">Phone: 08066276806</p>
          </Col>

          <Col md={4} className="mb-2"> {/* Reduced bottom margin */}
            <h4 className="text-white">Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary">Admissions</a></li>
              <li><a href="#" className="text-secondary">Programs</a></li>
              <li><a href="#" className="text-secondary">Alumni</a></li>
              <li><a href="#" className="text-secondary">Support Us</a></li>
              <li><a href="#" className="text-secondary">Events</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center pt-2 border-top border-secondary"> {/* Reduced padding */}
          <Col>
            <p className="mb-0">&copy; 2024 College of Education and Legal Studies, Nguru. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}