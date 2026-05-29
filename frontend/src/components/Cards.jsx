import React from 'react';
import Card from './Card'; // Updated Card component
import './Cards.css'; // Updated styles

const cardData = [
  {
    image: 'images/image23.jpg',
    title: "Nguru Town",
    text: "A historical hub known for its vibrant culture, trade, and hospitality. Nguru is the gateway to the Sahel.",
    link: "/nguru-town",
    badge: "HERITAGE",
    backdrop: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    accent: "linear-gradient(45deg, #2193b0, #6dd5ed)",
    glow: "rgba(33, 147, 176, 0.25)",
  },
  {
    image: 'images/image2.jpg',
    title: "College History",
    text: "Established to foster academic excellence, the college stands as a beacon of education in Yobe State.",
    link: "/college-history",
    badge: "HISTORY",
    backdrop: "linear-gradient(135deg, #3a1c0c 0%, #6e2a14 50%, #a83e1f 100%)",
    accent: "linear-gradient(45deg, #FF512F, #F09819)",
    glow: "rgba(255, 81, 47, 0.25)",
  },
  {
    image: 'images/image10.jpg',
    title: "Leadership",
    text: "Meet our Provost, a visionary leader dedicated to academic growth and innovation.",
    link: "/provost-profile",
    badge: "LEADERSHIP",
    backdrop: "linear-gradient(135deg, #1a0033 0%, #2d0b5a 50%, #4a00a0 100%)",
    accent: "linear-gradient(45deg, #8E2DE2, #4A00E0)",
    glow: "rgba(142, 45, 226, 0.25)",
  },
  {
    image: 'images/image11.jpg',
    title: "Staff Spotlight",
    text: "Celebrating the dedication and expertise of our faculty and administrative staff.",
    link: "/staff-spotlight",
    badge: "PEOPLE",
    backdrop: "linear-gradient(135deg, #0b3d2e 0%, #137a5a 50%, #1fa67a 100%)",
    accent: "linear-gradient(45deg, #11998e, #38ef7d)",
    glow: "rgba(17, 153, 142, 0.25)",
  },
];

const Cards = () => {
  return (
    <section className="cards-container">
      <div className="cards-header-wrap">
        <span className="cards-kicker">DISCOVER</span>
        <h2 className="cards-title">
          Explore the College &amp; the Town of <span className="cards-title-accent">Nguru</span>
        </h2>
        <p className="cards-intro">
          Located in the vibrant town of Nguru, our college thrives in an environment rich in
          culture, history, and educational progress. Discover more about the town and the
          individuals who shape our institution.
        </p>
      </div>

      <div className="row justify-content-center g-4">
        {cardData.map((card, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <Card
              image={card.image}
              title={card.title}
              text={card.text}
              link={card.link}
              badge={card.badge}
              backdrop={card.backdrop}
              accent={card.accent}
              glow={card.glow}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
