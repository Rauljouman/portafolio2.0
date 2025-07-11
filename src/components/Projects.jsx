import React from "react";
import Card from "./Card";
import "./styles/Projects.css";
import Atletic from "../assets/atletic.png";
import TicTacToe from "../assets/TicTacToe.png";
import BikeShare from "../assets/BikeShare.png";
import Portafolio1 from "../assets/Portafolio1.png";
import { useScrollAnimation } from "./ScrollAnimation";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Renders the Projects section containing a list of project cards.
 * Utilizes the useScrollAnimation hook to animate the section entrance.
 * Each project is displayed using the Card component with details such 
 * as image, title, subtitle, description, and a link to the project.
 * 
 * The projects showcased include:
 * - Atlètic Les Corts: A website recreation of the Space Invaders arcade game.
 * - BikeShare: A mobile app for urban bike rentals, developed with React Native.
 * - Tic Tac Toe: A console game version of the classic Tic Tac Toe, developed in Java.
 * - Portafolio 1.0: A personal portfolio website developed with HTML, CSS, and JavaScript.
 */

/*******  4bea8d59-0493-46b8-9bf5-f4ca979d7ba8  *******/
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
                        img={Atletic}
                        title="Atlètic Les Corts"
                        subtitle="Web Site"
                        description="Sitio web moderno y responsive para el club Atlètic Les Corts Futsal. Desarrollado con Next.js, React y CSS Modules, e integrado con Firebase para la gestión de equipos. Optimizado para SEO y rendimiento."
                        link="https://atletic-lc-page.vercel.app"
                    />
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
                </div>
            </div>
        </section>
);
};

export default Projects;
