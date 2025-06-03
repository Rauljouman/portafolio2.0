import React from "react";
import "./styles/Languages.css";
import { useScrollAnimation } from "./ScrollAnimation";


const languages = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const Languages = () => {

  const [ref, visible] = useScrollAnimation();
  return (
    <section className="languages-section" id="languages">
      <div ref={ref} className={`languages-content ${visible ? "animate-slide-in" : "hidden-slide"}`}>
        <h2 className="languages-title">Lenguajes</h2>
        <p className="section-description">
          A lo largo de mi formación y experiencia, he trabajado y estudiado con diferentes<br></br>lenguajes de programación. Estos son algunas de las tecnologías que he utilizado.
        </p>
        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div className="language-card" key={index}>
            <img src={lang.icon} alt={lang.name} className="language-icon-centered" />
            <span className="language-name-below">{lang.name}</span>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
