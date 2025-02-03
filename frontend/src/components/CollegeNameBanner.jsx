import React from 'react';

const CollegeNameBanner = () => {
  return (
    <div className="text-center py-4" style={bannerStyle}>
      <h1 style={headingStyle}>
        College of Education and Legal Studies, Nguru
      </h1>
      <p style={subTextStyle}>
        Knowledge is Treasure
      </p>
    </div>
  );
};

// Inline styles
const bannerStyle = {
  background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
  color: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const headingStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  marginBottom: '0.2rem',
  letterSpacing: '1.5px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
};

const subTextStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: 'while',
  letterSpacing: '1px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  
};

export default CollegeNameBanner;
