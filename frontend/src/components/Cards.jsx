import React from 'react';
import Card from './Card'; // Updated Card component
import './Cards.css'; // Updated styles

const cardData = [
  {
    image: 'images/image23.jpg',
    title: "Nguru Town",
    text: "A historical hub known for its vibrant culture, trade, and hospitality. Nguru is the gateway to the Sahel.",
    link: "/nguru-town",
  },
  {
    image: 'images/image25.jpg',
    title: "College History",
    text: "Established to foster academic excellence, the college stands as a beacon of education in Yobe State.",
    link: "/college-history",
  },
  {
    image: 'images/image10.jpg',
    title: "Leadership",
    text: "Meet our Provost, a visionary leader dedicated to academic growth and innovation.",
    link: "/provost-profile",
  },
  {
    image: 'images/image5.jpg',
    title: "Staff Spotlight",
    text: "Celebrating the dedication and expertise of our faculty and administrative staff.",
    link: "/staff-spotlight",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      <h1 className="cards-header">Explore the College of Education and Legal Studies Nguru</h1>
      <h1 className="cards-header">Explore the Nguru Town.</h1>
      <p className="cards-intro">
        Located in the vibrant town of Nguru, our college thrives in an environment rich in culture, history, and educational progress. Discover more about the town and the individuals who shape our institution.
      </p>
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <Card 
              image={card.image} 
              title={card.title} 
              text={card.text} 
              link={card.link} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
