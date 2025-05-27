import React from "react";
import "./styles/Experience.css";
import { useScrollAnimation } from "./ScrollAnimation";

const Experience = () => {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="experience" id="experience">
      <div ref={ref} className={`experience-content ${visible ? "animate-slide-in" : "hidden-slide"}`}>
        <h2 className="section-title">Experience</h2>
        <p className="section-description">
          A continuación, te muestro un resumen de mi experiencia tanto profesional como académica.</p>
        <div className="experience-columns">
          <div className="experience-block">
            <h3 className="experience-subtitle">💼 Trabajo</h3>
            <div className="experience-item">
              <h4>Desarrollador Web <span className="practicas">(Practicas)</span></h4>
              <span className="experience-date">
                Alice Solutions S.L.<br />Enero 2025 – Mayo 2025
              </span>
              <p>
                Test de funcionalidades, identificación de bugs, propuestas de mejora en UX y desarrollo de vistas y componentes para páginas web.
              </p>
            </div>
          </div>

          <div className="experience-block">
            <h3 className="experience-subtitle">🎓 Estudios</h3>
            <div className="experience-item">
              <h4>CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)</h4>
              <span className="experience-date">
                Prat Educació<br />2022 – 2025
              </span>
              <p>
                Formación en desarrollo web, móvil y de escritorio. Uso de tecnologías como Java, React, Firebase y SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
