import React from "react";

import Nuevolanzamiento from "./Nuevolanzamiento";

import AOS from "aos";
import { useEffect } from "react";

function Lanzamientos(){

    useEffect(() => {
        AOS.refreshHard(); 
      }, []);

    return(
    <>
    <h3 class="text-white mt-4 mb-4 text text-center">No te pierdas los últimos lanzamientos!</h3>

    <div class="d-flex justify-content-center mt-4 text-white flex-wrap">
        <Nuevolanzamiento 
        link="https://www.youtube.com/embed/moEMEl742X0?si=vmssoGeyGE94bHiO"
        artista="Ramma"
        titulo="Nombre de canción" 
        />
        <Nuevolanzamiento 
        link="https://www.youtube.com/watch?v=TnVhj2SwKfQ"
        artista="Ramma"
        titulo="Iconicos"
        />
    </div>
    </>
    )
}

export default Lanzamientos;