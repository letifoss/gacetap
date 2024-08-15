import React from "react";
import '../App.css'

import Nuevolanzamiento from "./Nuevolanzamiento";

import AOS from "aos";
import { useEffect } from "react";

function Lanzamientos(){

    useEffect(() => {
        AOS.refreshHard(); 
      }, []);

    return(
    <>
    <div className="d-flex flex-column align-items-center banner">
    <h3 className="text-white mt-4 mb-4 text text-center">No te pierdas los últimos lanzamientos!</h3>
    <div className="d-flex justify-content-center mt-4 text-white flex-wrap w-100">
        <Nuevolanzamiento 
        video="TnVhj2SwKfQ"
        artista="RAMMA x ARA"
        titulo="SOMOS EL SHOW" 
        />
        <Nuevolanzamiento 
        video="BhbzlXaeHUk"
        artista="VALUTO Ft. DAVUS"
        titulo="CERCA" 
        />
        <Nuevolanzamiento 
        video="M-5h9Oj03ew"
        artista="FOSSE"
        titulo="ALTURA" 
        />
        <Nuevolanzamiento 
        video="4oEGsEpYKEY"
        artista="ARA"
        titulo="COMO SOY" 
        />
        <Nuevolanzamiento 
        video="jRO59i-h50U"
        artista="WAVE Ft. KNAK"
        titulo="COMO ESTAS?" 
        />
        <Nuevolanzamiento 
        video="NREJtSZN5-U"
        artista="TADU"
        titulo="UN MOMENTO Y NADA MÁS" 
        />
    </div>
    </div>
    </>
    )
}

export default Lanzamientos;