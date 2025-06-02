import React from "react";
import Card from "./Card";
import "./styles/Projects.css";
import SpaceInvaders from "../assets/SpaceInvaders.png";
import TicTacToe from "../assets/TicTacToe.png";
import BikeShare from "../assets/BikeShare.png";
import Portafolio1 from "../assets/Portafolio1.png";
import { useScrollAnimation } from "./ScrollAnimation";

const Projects = () => {
const [ref, visible] = useScrollAnimation();
return (
        <section className="projects" id="projects">
            <div ref={ref} className={`projects-content ${visible ? "animate-slide-in" : "hidden-slide"}`}>
                <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
                <p className="section-description">
                Estos son algunos de los proyectos que he desarrollado o en los que he colaborado.<br></br>
                ¡Espero que disfrutes que te interse ver alguno!
                </p>

                <div className="cards-container">
                    <Card
                        img={BikeShare}
                        title="BikeShare "
                        subtitle="Mobile App"
                        description="Aplicación móvil creada en grupo para el alquiler de bicicletas urbanas, desarrollada con React Native y gestionada mediante Supabase como backend. Encargado del FrontEnd."
                        link="https://github.com/cristoge/bikeshare/tree/master/src"
                    />
                    <Card
                        img={TicTacToe}
                        title="Tic Tac Toe "
                        subtitle="Console Game"
                        description="Versión por consola del juego clásico 3 en raya, desarrollada en Java. Implementa lógica de turnos y condiciones de victoria para partidas rápidas entre dos jugadores. Creeado con Java."
                        link="https://github.com/Rauljouman/3-en-raya"
                    />
                    <Card
                        img={Portafolio1}
                        title="Portafolio 1.0"
                        subtitle="Web site"
                        description="Portafolio personal desarrollado con HTML, CSS y JavaScript, mostrando mis proyectos y habilidades. Incluye un diseño responsivo y una navegación intuitiva."
                        link="https://github.com/Rauljouman/Portafolio.github.io"
                    />
                    <Card
                        img={SpaceInvaders}
                        title="Space Invaders "
                        subtitle="Web Game"
                        description="Recreación del juego arcade Space Invaders, programado con HTML, CSS y JavaScript puro, enfocado en la lógica y el dinamismo visual. Creado con HTML, CSS y JavaScript."
                        link="https://github.com/Rauljouman/Space-Invader"
                    />
                </div>
            </div>
        </section>
);
};

export default Projects;
