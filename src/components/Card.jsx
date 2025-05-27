import React from "react";
import "./styles/Card.css";
import { useScrollAnimation } from "./ScrollAnimation";

const Card = ({ img, title, description, link, subtitle }) => {
  const [ref, visible] = useScrollAnimation();

  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${visible ? "animate-slide-in" : "hidden-slide"}`}
    >
      <div className="image-container">
        <img src={img} alt={title} className="project-image" />
        <div className="card-hover">
          <p>{description}</p>
        </div>
      </div>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </a>
  );
};

export default Card;
