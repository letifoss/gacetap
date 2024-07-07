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
    <div className="d-flex justify-content-center text">
        <h3 className="text-white text-center mt-5 w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus, at nemo laboriosam accusamus laborum quae officia delectus ex velit dolorum. Quaerat aliquam tenetur placeat cupiditate similique, dolore iure minima!</h3>
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
    <div className="d-flex flex-column align-items-center justify-content-center mt-5 border-0">
        <div className="d-flex justify-content-center w-100 " data-aos="fade-right">
            <h3 className="text-center text-white mt-5 mb-5">Conocé a nuestros artistas</h3>
        </div>
        <div className="d-flex justify-content-center text-white flex-wrap bg-grey">
            <Artista 
            nombre='Ramma'
            imagen={fotoartista}
            time='1000'
            />
            <Artista 
            nombre='Wave'
            imagen={fotoartista}
            time='1800'
            />
            <Artista 
            nombre='Fosse'
            imagen={fotoartista}
            time='2100'
            />
        </div>
    </div>
    </div>
    </>
    )
}

export default Nosotros;