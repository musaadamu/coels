import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
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
             {/* Leadership Section - Provost (Featured) above Registrar */}
             <div className='w-100 d-flex flex-column gap-4'>

               {/* Provost - Featured (Larger) Card */}
               <div
                 className='position-relative overflow-hidden rounded-4'
                 style={{
                   background: '#ffffff',
                   border: '1px solid rgba(33, 147, 176, 0.15)',
                   boxShadow: '0 6px 20px rgba(15, 32, 39, 0.08)',
                   transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.transform = 'translateY(-4px)';
                   e.currentTarget.style.boxShadow = '0 14px 32px rgba(33, 147, 176, 0.25)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 32, 39, 0.08)';
                 }}
               >
                 <div
                   className='d-flex align-items-center justify-content-center'
                   style={{
                     height: '320px',
                     background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
                     overflow: 'hidden'
                   }}
                 >
                   <img
                     src='/images/image7.jpg'
                     alt='Promotion 1 - Meet Our Provost'
                     style={{
                       maxHeight: '100%',
                       maxWidth: '100%',
                       width: 'auto',
                       height: 'auto',
                       objectFit: 'contain',
                       display: 'block'
                     }}
                   />
                 </div>
                 <div className='p-3 text-center'>
                   <span
                     className='d-inline-block mb-2 fw-semibold'
                     style={{
                       background: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
                       color: '#ffffff',
                       padding: '5px 14px',
                       borderRadius: '20px',
                       fontSize: '0.7rem',
                       letterSpacing: '1.5px'
                     }}
                   >
                     LEADERSHIP
                   </span>
                   <h4 className='fw-bold mb-1' style={{ color: '#0f2027' }}>Meet Our Provost</h4>
                   <p className='small text-muted mb-0'>Office of the Provost</p>
                 </div>
               </div>

               {/* Registrar - Compact Card */}
               <div
                 className='position-relative overflow-hidden rounded-4'
                 style={{
                   background: '#ffffff',
                   border: '1px solid rgba(255, 81, 47, 0.15)',
                   boxShadow: '0 4px 16px rgba(15, 32, 39, 0.06)',
                   transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                 }}
                 onMouseOver={e => {
                   e.currentTarget.style.transform = 'translateY(-3px)';
                   e.currentTarget.style.boxShadow = '0 10px 24px rgba(255, 81, 47, 0.22)';
                 }}
                 onMouseOut={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 32, 39, 0.06)';
                 }}
               >
                 <div
                   className='d-flex align-items-center justify-content-center'
                   style={{
                     height: '200px',
                     background: 'linear-gradient(135deg, #3a1c0c 0%, #6e2a14 50%, #a83e1f 100%)',
                     overflow: 'hidden'
                   }}
                 >
                   <img
                     src='/images/image16.jpg'
                     alt='Promotion 2 - Meet Our Registrar'
                     style={{
                       maxHeight: '100%',
                       maxWidth: '100%',
                       width: 'auto',
                       height: 'auto',
                       objectFit: 'contain',
                       display: 'block'
                     }}
                   />
                 </div>
                 <div className='p-3 text-center'>
                   <span
                     className='d-inline-block mb-2 fw-semibold'
                     style={{
                       background: 'linear-gradient(45deg, #FF512F, #F09819)',
                       color: '#ffffff',
                       padding: '4px 12px',
                       borderRadius: '20px',
                       fontSize: '0.65rem',
                       letterSpacing: '1.5px'
                     }}
                   >
                     ADMINISTRATION
                   </span>
                   <h5 className='fw-bold mb-1' style={{ color: '#3a1c0c' }}>Meet Our Registrar</h5>
                   <p className='small text-muted mb-0'>Office of the Registrar</p>
                 </div>
               </div>

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