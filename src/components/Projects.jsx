import React from "react";
import Card from "./Card";
import "./styles/Projects.css";

const Projects = () => {
return (
    <section> 
        <div className="projects" id="projects">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="cards-container">
                <Card
                    img="proyecto1.jpg"
                    title="Atletic Les Corts – Website"
                    language="React"
                    description="Diseño y desarrollo del sitio web oficial del club de fútbol sala Atletic Les Corts, implementado con React para ofrecer una experiencia moderna y responsive."
                />
                <Card
                    img="proyecto2.jpg"
                    title="BikeShare – Mobile App"
                    language="React Native & Supabase"
                    description="Aplicación móvil para el alquiler de bicicletas urbanas, desarrollada con React Native y gestionada mediante Supabase como backend."
                />
                <Card
                    img="proyecto3.jpg"
                    title="Tic Tac Toe – Console Game"
                    language="Java"
                    description="Versión por consola del juego clásico 3 en raya, desarrollada en Java. Implementa lógica de turnos y condiciones de victoria para partidas rápidas entre dos jugadores."
                />
                <Card
                    img="proyecto4.jpg"
                    title="Space Invaders – Web Game"
                    language="HTML, CSS & JavaScript"
                    description="Recreación del juego arcade Space Invaders, programado con HTML, CSS y JavaScript puro, enfocado en la lógica y el dinamismo visual."
                />
            </div>
        </div>
    </section>
);
};

export default Projects;
