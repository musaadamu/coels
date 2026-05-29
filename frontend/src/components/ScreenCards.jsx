import React from "react";
import "./ScreenCards.css";

const cards = [
  {
    badge: "Nguru Town",
    image: "images/image23.jpg",
    title: "Nguru Town",
    text: "A historical hub known for its vibrant culture, trade, and hospitality. Nguru is the gateway to the Sahel.",
    link: "/nguru-town",
  },
  {
    badge: "College History",
    image: "images/image25.jpg",
    title: "College History",
    text: "Established to foster academic excellence, the college stands as a beacon of education in Yobe State.",
    link: "/college-history",
  },
  {
    badge: "Leadership",
    image: "images/image10.jpg",
    title: "Leadership",
    text: "Meet our Provost, a visionary leader dedicated to academic growth and innovation.",
    link: "/provost-profile",
  },
  {
    badge: "Staff Spotlight",
    image: "images/image5.jpg",
    title: "Staff Spotlight",
    text: "Celebrating the dedication and expertise of our faculty and administrative staff.",
    link: "/staff-spotlight",
  },
];

export default function ScreenCards() {
  return (
    <section className="screen-cards-section">
      <div className="screen-cards-shell">
        <div className="screen-cards-header">
          <div>
            <div className="screen-cards-eyebrow">Explore</div>
            <h2 className="screen-cards-title">Explore the College of Education and Legal Studies Nguru</h2>
            <h3 className="screen-cards-subtitle">Explore the Nguru Town.</h3>
            <p className="screen-cards-lead">
              Located in the vibrant town of Nguru, our college thrives in an environment rich in culture, history, and educational progress.
              Discover more about the town and the individuals who shape our institution.
            </p>
          </div>

          <aside className="screen-cards-side">
            <h3>What you’ll discover</h3>
            <p>
              The story of Nguru, the growth of the college, the vision of our leadership, and the people behind academic excellence.
            </p>
          </aside>
        </div>

        <div className="screen-card-grid">
          {cards.map((card) => (
            <article className="screen-card" key={card.title}>
              <div className="screen-card-media">
                <img src={card.image} alt={card.title} />
                <div className="screen-card-badge">{card.badge}</div>
              </div>

              <div className="screen-card-body">
                <h4 className="screen-card-title">{card.title}</h4>
                <p className="screen-card-text">{card.text}</p>

                <div className="screen-card-cta">
                  <a className="screen-card-link" href={card.link}>
                    <span>Learn More</span>
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

