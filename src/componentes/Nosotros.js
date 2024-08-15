import React from "react";
import '../styles/Nosotros.css'
import '../App.css'


import fotoartista from '../imagenes/foto4.jpeg';
import taduvazquez from '../imagenes/foto1.jpeg';
import fosse from '../imagenes/foto1.jpeg';

import Artista from "./Artista";
import Equipo from "./Equipo";


function Nosotros(props){

    return (
    <>
    <div className="d-flex justify-content-center text mt-5">
        <h3 className="text-white text-center mt-5 w-75">Gaceta Play es un sello discográfico enfocado en la producción y lanzamiento de música, así como en la organización de eventos. El objetivo principal es crear una comunidad conectada a través de la música, ofreciendo una plataforma donde artistas y fans puedan interactuar de manera orgánica.</h3>
    </div>
    <div className="banner">
    <h2 className="text-center text-white mt-5 mb-5">NUESTRO EQUIPO</h2>
    <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Equipo 
        nombre='FOSSE'
        imagen={fosse}
        time={1000}
        profesion='Productor'/>      
        <Equipo 
        nombre='TADU'
        imagen={taduvazquez}
        time={1700}
        profesion='Productor'/>
    </div>
    </div>
    </>
    )
}

export default Nosotros;