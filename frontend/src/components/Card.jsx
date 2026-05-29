import React from 'react';
import './Cards.css'; // Updated styles

const Card = ({ image, title, text, link, badge, backdrop, accent, glow }) => {
  const hoverIn = (e) => {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.boxShadow = `0 14px 32px ${glow || 'rgba(15, 32, 39, 0.18)'}`;
  };
  const hoverOut = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 32, 39, 0.08)';
  };

  return (
    <article
      className="explore-card"
      style={{ boxShadow: '0 4px 16px rgba(15, 32, 39, 0.08)' }}
      onMouseOver={hoverIn}
      onMouseOut={hoverOut}
    >
      <a href={link} className="explore-card-media-link" aria-label={title}>
        <div
          className="explore-card-media"
          style={{ background: backdrop || 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)' }}
        >
          <img src={image} alt={title} className="explore-card-img" />
        </div>
      </a>
      <div className="explore-card-body">
        {badge && (
          <span
            className="explore-card-badge"
            style={{ background: accent || 'linear-gradient(45deg, #2193b0, #6dd5ed)' }}
          >
            {badge}
          </span>
        )}
        <h3 className="explore-card-title">{title}</h3>
        <p className="explore-card-text">{text}</p>
        <a
          href={link}
          className="explore-card-cta"
          style={{ background: accent || 'linear-gradient(45deg, #2193b0, #6dd5ed)' }}
        >
          Learn More
          <span className="explore-card-cta-arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
};

export default Card;
