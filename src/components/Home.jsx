import React from 'react';
import './styles/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className="home" id="home"> 
        <div className="landing">
            <h1>Raül Jouman</h1>
            <p className="title">Desarrollador Junior</p>
            <p className="desc">
              Hola, soy Raül, un desarrollador full stack junior de España.
              <br />Me apasiona convertir ideas en código y
              <br />aprender algo nuevo cada día.
            </p>
            <div>
              <div className="social-icons">
                  <a href="mailto:rauljouman@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a href="https://github.com/Rauljouman" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://linkedin.com/in/raul-jouman-ip" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
        </div>
      </section>
  );
}

export default Home;