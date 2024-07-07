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
    <h3 className="text-white mt-4 mb-4 text text-center">No te pierdas los últimos lanzamientos!</h3>

    <div className="d-flex justify-content-center mt-4 text-white flex-wrap banner">
        <Nuevolanzamiento 
        link="https://www.youtube.com/embed/moEMEl742X0?si=vmssoGeyGE94bHiO"
        artista="Valuto"
        titulo="Nombre de canción" 
        />
        <Nuevolanzamiento 
        link="https://www.youtube.com/embed/TnVhj2SwKfQ?si=Die4wmgcl_Z5RHGb"
        artista="Ramma"
        titulo="Iconicos"
        />
        <Nuevolanzamiento
        link="https://www.youtube.com/embed/DeMVSBnzsCg?si=kl-UvC95NfI_3GtG"
        artista="Valuto"
        titulo="No soy yo"
        />
    </div>
    </>
    )
}

export default Lanzamientos;