import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './Cards.css'; // Updated styles

const Card = ({ image, title, text, link }) => {
  return (
    <BootstrapCard className="custom-card shadow">
      <a href={link} className="card-link">
        <BootstrapCard.Img 
          variant="top" 
          src={image} 
          alt={title} 
          className="card-image"
        />
      </a>
      <BootstrapCard.Body>
        <BootstrapCard.Title className="card-title">{title}</BootstrapCard.Title>
        <BootstrapCard.Text className="card-text">{text}</BootstrapCard.Text>
        <a href={link} className="btn btn-primary">Learn More</a>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
