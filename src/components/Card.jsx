import React from "react";
import "./styles/Card.css";


const Card = ({ img, title, description, language }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-image" />
      <p>{language}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
