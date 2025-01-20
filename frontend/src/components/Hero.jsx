import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarouselSection from './Carousol';  // Import the Carousel section
import CardSection from './Cards';          // Import the Card section

const Hero = () => {
  return (
    <div className='py-5 d-flex flex-column align-items-center'>
      <div className='d-flex w-100'>
        <Container className='d-flex flex-column align-items-start w-25'>
          <div>
            <Card className='p-4 d-flex flex-column align-items-center hero-card bg-light'>
              <LinkContainer to='/login'>
                <Button variant='primary' className='mb-3 w-100'>
                  Sign In
                </Button>
              </LinkContainer>
              <LinkContainer to='/register'>
                <Button variant='secondary' className='w-100'>
                  Register
                </Button>
              </LinkContainer>
              
              {/* Image Section (Stacked Vertically) */}
              <div className='mt-4 d-flex flex-column align-items-center gap-3'>
                <img 
                  src='/images/image11.jpg' 
                  alt='Promotion 1' 
                  className='img-fluid' 
                  style={{ maxHeight: '200px', objectFit: 'cover' }} 
                />
                <img 
                  src='/images/image15.jpg' 
                  alt='Promotion 2' 
                  className='img-fluid' 
                  style={{ maxHeight: '200px', objectFit: 'cover' }} 
                />
              </div>
            </Card>
          </div>
        </Container>
        
        {/* Carousel Section */}
        <CarouselSection />  
      </div>
      
      {/* Card Section Below */}
      <CardSection />  
    </div>
  );
};

export default Hero;
