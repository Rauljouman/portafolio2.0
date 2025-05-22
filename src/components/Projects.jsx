import React from "react";
import Card from "./Card";
import "./styles/Projects.css";
import SpaceInvaders from "../assets/SpaceInvaders.png";
import TicTacToe from "../assets/TicTacToe.png"
import BikeShare from "../assets/BikeShare.png";

const Projects = () => {
return (
    <section> 
        <div className="projects" id="projects">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="cards-container">
                <Card
                    img="Atletic.jpg"
                    title="Atletic Les Corts"
                    subtitle="Web App"
                    description="Diseño y desarrollo del sitio web oficial del club de fútbol sala Atletic Les Corts, implementado con React para ofrecer una experiencia moderna y responsive. Creado con React."
                    link="https://atleticlescorts.com/"
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
