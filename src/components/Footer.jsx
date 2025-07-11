// Footer.jsx
import React from "react";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="social-icons">
          <a href="mailto:rauljouman@gmail..com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/Rauljouman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/raul-jouman-ip" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="/CVRaulJouman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Descargar CV"
          >
            <FontAwesomeIcon icon={faFile} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Raül Jouman.<br/> Todos los derechos resevados.</p>
      </div>
    </footer>
  );
};

export default Footer;
