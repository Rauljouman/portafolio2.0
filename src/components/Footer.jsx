// Footer.jsx
import React from "react";
import "./styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";


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
          <a href="/CV_Raul_Jouman_Ip.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
        <p>&copy; 2025 Raül Jouman.<br/> Todos los derechos resevados.</p>
      </div>
    </footer>
  );
};

export default Footer;
