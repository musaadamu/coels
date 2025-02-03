import React from 'react';
import Carousol from './Carousol';

const slidesData = [
  {
    image: 'images/image10.jpg',
    alt: 'The Provost',
    title: 'Leadership per Excellence',
    caption: 'The Provost'
  },
  {
    image: 'images/image1.jpg',
    alt: 'Sign Board',
    title: 'The College\'s Sign Board',
    caption: 'The Sign of Greatness'
  },
  {
    image: 'images/image5.jpg',
    alt: 'Admin Block',
    title: 'The Admin Block',
    caption: 'Administrative Hub of the College'
  },
  {
    image: 'images/image3.jpg',
    alt: 'College Gate',
    title: 'The College\'s Gate',
    caption: 'Welcoming students to a world of endless possibilities.'
  },
  {
    image: 'images/image4.jpg',
    alt: 'Sign Board',
    title: 'The College\'s Sign Board',
    caption: 'Welcoming students to a world of endless possibilities.'
  },
  {
    image: 'images/image9.jpg',
    alt: 'The Provost',
    title: 'The Provost',
    caption: 'Leadership per excellence'
  }
];

const HomePage = () => {
  return (
    <div>
      <Carousol slides={slidesData} />
    </div>
  );
};

export default HomePage;
