import React from 'react';
import { Container, Card } from 'react-bootstrap';
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
       </div>
     </div>

     {/* Portal Access Section - full-width, between hero and explore cards */}
     <PortalAccess />

     {/* Card Section Below */}
     <div className='mt-4'>
       <CardSection />
     </div>
   </div>
 );
};

const portals = [
  { label: 'Admin NCE Portal',       href: 'https://coelsnguru.safsrms.com',           audience: 'Administration', tag: 'ADMIN',   accent: 'linear-gradient(45deg, #2193b0, #6dd5ed)', glow: 'rgba(33, 147, 176, 0.35)',  desc: 'Manage NCE academic operations and records.' },
  { label: 'Admin Diploma Portal',   href: 'https://coelsnguru_diploma.safsrms.com',   audience: 'Administration', tag: 'ADMIN',   accent: 'linear-gradient(45deg, #FF512F, #F09819)', glow: 'rgba(255, 81, 47, 0.35)',  desc: 'Manage Diploma programme operations and records.' },
  { label: 'Student NCE Portal',     href: 'https://coelsnguru.safrecords.com',        audience: 'Students',       tag: 'STUDENT', accent: 'linear-gradient(45deg, #11998e, #38ef7d)', glow: 'rgba(17, 153, 142, 0.35)', desc: 'Registration, results and fees for NCE students.' },
  { label: 'Student Diploma Portal', href: 'https://coelsnguru_diploma.safrecords.com',audience: 'Students',       tag: 'STUDENT', accent: 'linear-gradient(45deg, #8E2DE2, #4A00E0)', glow: 'rgba(142, 45, 226, 0.35)', desc: 'Registration, results and fees for Diploma students.' },
];

const PortalAccess = () => {
  const hoverIn = (e, glow) => {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.boxShadow = `0 16px 34px ${glow}`;
  };
  const hoverOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 32, 39, 0.08)';
  };

  return (
    <section
      className='portal-access-section py-5 px-3'
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)' }}
    >
      <div className='text-center mx-auto mb-5' style={{ maxWidth: '760px' }}>
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
          PORTAL ACCESS
        </span>
        <h2 className='fw-bold mb-2' style={{ color: '#0f2027', fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', lineHeight: 1.25 }}>
          Login to Your Portal
        </h2>
        <p className='text-muted mb-0' style={{ fontSize: '1rem', lineHeight: 1.7 }}>
          Direct, secure access for students, faculty and administrators to all
          academic and administrative services.
        </p>
      </div>

      <div className='container'>
        <div className='row g-4 justify-content-center'>
          {portals.map((p, idx) => (
            <div className='col-lg-3 col-md-6' key={idx}>
              <a
                href={p.href}
                target='_blank'
                rel='noopener noreferrer'
                className='d-block text-decoration-none h-100'
                onMouseOver={(e) => hoverIn(e, p.glow)}
                onMouseOut={hoverOut}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(15, 32, 39, 0.06)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(15, 32, 39, 0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  color: 'inherit'
                }}
              >
                <div
                  style={{
                    height: '8px',
                    background: p.accent
                  }}
                />
                <div className='p-4 d-flex flex-column' style={{ minHeight: '220px' }}>
                  <div
                    className='d-flex align-items-center justify-content-center mb-3'
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: p.accent,
                      boxShadow: `0 6px 16px ${p.glow}`
                    }}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                      <path d='M15 3h6v6'></path>
                      <path d='M10 14L21 3'></path>
                      <path d='M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5'></path>
                    </svg>
                  </div>
                  <span
                    className='d-inline-block mb-2 fw-semibold align-self-start'
                    style={{
                      background: '#f1f5f9',
                      color: '#475569',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      fontSize: '0.65rem',
                      letterSpacing: '1.5px'
                    }}
                  >
                    {p.tag}
                  </span>
                  <h5 className='fw-bold mb-2' style={{ color: '#0f2027' }}>{p.label}</h5>
                  <p className='small text-muted mb-3' style={{ flexGrow: 1 }}>{p.desc}</p>
                  <span
                    className='d-inline-flex align-items-center fw-semibold'
                    style={{
                      color: '#0f2027',
                      fontSize: '0.85rem',
                      gap: '6px'
                    }}
                  >
                    Open Portal
                    <span aria-hidden='true' style={{ fontSize: '1rem' }}>&#8599;</span>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;