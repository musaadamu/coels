import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarouselSection from './Carousol';
import CardSection from './Cards';

const Hero = () => {
 return (
   <div className='py-5'>
     <div className='d-flex flex-column flex-lg-row w-100'>
       <Container className='mb-4 mb-lg-0' style={{ width: '100%', maxWidth: '400px' }}>
         <div>
           <Card className='p-4 d-flex flex-column align-items-center hero-card bg-light'>
             {/* Button Section */}
                <div className='w-100 d-flex flex-column flex-sm-row gap-3'>
                  <LinkContainer to='/login'>
                    <Button variant='primary' className='w-100'>
                      Sign In
                    </Button>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Button variant='secondary' className='w-100'>
                      Register
                    </Button>
                  </LinkContainer>
                </div>
             {/* Image Grid Section */}
             <div className='mt-5 w-100'>
  {/* Updated image addresses */}
                  {[
                    { src: '/images/image7.jpg', name: 'Meet Our Provost' }, 
                    { src: '/images/image16.jpg', name: 'Meet Our Registrar' }, 
                    { src: '/images/image14.jpg', name: 'Leadership Per Excellence' }, 
                    { src: '/images/image27.jpg', name: 'The Great Administrator' },
                  ].reduce((acc, { src, name }, index) => {
                    // Group images into pairs
                    if (index % 2 === 0) {
                      acc.push([{ src, name }]); // Start a new pair
                    } else {
                      acc[acc.length - 1].push({ src, name }); // Add to the existing pair
                    }
                    return acc;
                  }, []).map((pair, rowIndex) => (
                    <div 
                      key={rowIndex} 
                      className='d-flex flex-column flex-sm-row justify-content-center mt-5 gap-3 w-100 mb-3'
                    >
                      {pair.map(({ src, name }, colIndex) => (
                        <div className='w-100' key={colIndex}>
                          <img 
                            src={src} 
                            alt={`Promotion ${rowIndex * 2 + colIndex + 1}`} 
                            className='img-fluid rounded' 
                            style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
                          />
                          <h5 className='text-center mt-2'>{name}</h5> {/* Display the name below the image */}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
           </Card>
         </div>
       </Container>
       
       {/* Carousel Section */}
       <div className='flex-grow-1 mb-4 mt-5' >
         <CarouselSection />
         {/* Redesigned Portal Buttons Section */}
         <div className='d-flex flex-column gap-4 mt-4'>
           {/* Admin Portals */}
           <div className='d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4' >
             <a 
               href="https://coelsnguru.safsrms.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className='text-decoration-none'
             >
               <Button 
                 variant="gradient" 
                 className='px-4 py-3 fw-bold rounded-pill shadow-sm'
                 style={{
                   background: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
                   border: 'none',
                   color: 'white',
                   transition: 'transform 0.2s, shadow 0.2s',
                   minWidth: '200px'
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.transform = 'translateY(-2px)';
                   e.currentTarget.style.boxShadow = '0 4px 15px rgba(33, 147, 176, 0.3)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                 }}
               >
                 ADMIN NCE PORTAL
               </Button>
             </a>
             <a 
               href="https://coelsnguru_diploma.safsrms.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className='text-decoration-none'
             >
               <Button 
                 variant="gradient" 
                 className='px-4 py-3 fw-bold rounded-pill shadow-sm'
                 style={{
                   background: 'linear-gradient(45deg, #FF512F, #F09819)',
                   border: 'none',
                   color: 'white',
                   transition: 'transform 0.2s, shadow 0.2s',
                   minWidth: '200px'
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.transform = 'translateY(-2px)';
                   e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 81, 47, 0.3)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                 }}
               >
                 ADMIN DIPLOMA PORTAL
               </Button>
             </a>
           </div>

           {/* Student Portals */}
           <div className='d-flex flex-column flex-sm-row justify-content-center gap-3 mt-5'>
             <a 
               href="https://coelsnguru.safrecords.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className='text-decoration-none'
             >
               <Button 
                 variant="gradient" 
                 className='px-4 py-3 fw-bold rounded-pill shadow-sm'
                 style={{
                   background: 'linear-gradient(45deg, #11998e, #38ef7d)',
                   border: 'none',
                   color: 'white',
                   transition: 'transform 0.2s, shadow 0.2s',
                   minWidth: '200px'
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.transform = 'translateY(-2px)';
                   e.currentTarget.style.boxShadow = '0 4px 15px rgba(17, 153, 142, 0.3)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                 }}
               >
                 STUDENT NCE PORTAL
               </Button>
             </a>
             <a 
               href="https://coelsnguru_diploma.safrecords.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className='text-decoration-none'
             >
               <Button 
                 variant="gradient" 
                 className='px-4 py-3 fw-bold rounded-pill shadow-sm'
                 style={{
                   background: 'linear-gradient(45deg, #8E2DE2, #4A00E0)',
                   border: 'none',
                   color: 'white',
                   transition: 'transform 0.2s, shadow 0.2s',
                   minWidth: '200px'
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.transform = 'translateY(-2px)';
                   e.currentTarget.style.boxShadow = '0 4px 15px rgba(142, 45, 226, 0.3)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                 }}
               >
                 STUDENT DIPLOMA PORTAL
               </Button>
             </a>
           </div>
         </div>
       </div>
     </div>
     
     {/* Card Section Below */}
     <div className='mt-4'>
       <CardSection />
     </div>
   </div>
 );
};

export default Hero;