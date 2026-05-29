import React from 'react';
import './CollegeNameBanner.css';

const CollegeNameBanner = () => {
  return (
    <section className="college-name-banner" role="banner" aria-label="College name and motto">
      <h1 className="college-name-banner__title">
        College of Education and Legal Studies,{' '}
        <span className="college-name-banner__title-accent">Nguru</span>
      </h1>
      <p className="college-name-banner__motto">Knowledge is Treasure</p>
    </section>
  );
};

export default CollegeNameBanner;
