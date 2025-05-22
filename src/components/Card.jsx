import React from "react";
import "./styles/Card.css";

const Card = ({ img, title, description, link, subtitle }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={img} alt={title} className="project-image" />
      <div className="card-overlay">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <div className="card-hover">
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
