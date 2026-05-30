import React, { useEffect } from 'react';
import './Carousol.css';

const slides = [
  { src: 'images/image10.jpg', alt: 'The Provost' },
  { src: 'images/image9.jpg',  alt: 'College Leadership' },
  { src: 'images/image1.jpg',  alt: 'Campus Sign Board' },
  { src: 'images/image17.jpg', alt: 'Campus View' },
  { src: 'images/image5.jpg',  alt: 'Academic Activities' },
  { src: 'images/image18.jpg', alt: 'College Facility' },
  { src: 'images/image19.jpg', alt: 'Student Life' },
  { src: 'images/image25.jpg', alt: 'College Grounds' },
  { src: 'images/image24.jpg', alt: 'College Programs' },
  { src: 'images/image22.jpg', alt: 'Faculty Excellence' },
  { src: 'images/image23.jpg', alt: 'College Community' },
];

const CAROUSEL_ID = 'heroCarousel';

const Carousel = () => {
  useEffect(() => {
    // Initialize Bootstrap Carousel
    const carouselElement = document.getElementById(CAROUSEL_ID);
    if (carouselElement) {
      // Import Bootstrap Carousel class dynamically
      try {
        const BSCarousel = window.bootstrap?.Carousel;
        if (BSCarousel) {
          const carousel = new BSCarousel(carouselElement, {
            interval: 4000,
            pause: 'hover',
            ride: 'carousel',
          });
          
          // Ensure carousel cycles continuously
          carousel.cycle();
        }
      } catch (error) {
        console.warn('Bootstrap Carousel initialization:', error);
      }
    }
  }, []);

  return (
    <div className="hero-carousel-wrapper">
      <div
        id={CAROUSEL_ID}
        className="carousel slide carousel-fade hero-carousel"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="hover"
      >
        {/* Indicators */}
        <div className="carousel-indicators hero-carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={`ind-${i}`}
              type="button"
              data-bs-target={`#${CAROUSEL_ID}`}
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner hero-carousel-inner">
          {slides.map((s, i) => (
            <div
              key={`slide-${i}`}
              className={`carousel-item${i === 0 ? ' active' : ''}`}
            >
              <div className="hero-slide-frame">
                <img 
                  src={s.src} 
                  alt={s.alt} 
                  className="hero-slide-img"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="hero-slide-vignette" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev hero-carousel-control"
          type="button"
          data-bs-target={`#${CAROUSEL_ID}`}
          data-bs-slide="prev"
        >
          <span className="hero-carousel-arrow" aria-hidden="true">&#8249;</span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next hero-carousel-control"
          type="button"
          data-bs-target={`#${CAROUSEL_ID}`}
          data-bs-slide="next"
        >
          <span className="hero-carousel-arrow" aria-hidden="true">&#8250;</span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;