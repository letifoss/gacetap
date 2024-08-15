import React from "react";
import Artista from "./Artista";

import fotoartista from '../imagenes/foto4.jpeg';



function Artistas(){
    return(
    <div className="banner d-flex flex-column align-items-center justify-content-center mt-5 border-0">
        <div className="d-flex justify-content-center w-100 " data-aos="fade-right">
            <h3 className="text-center text-white mt-5 mb-5">Conocé a nuestros artistas</h3>
        </div>
        <div className="d-flex justify-content-center text-white flex-wrap bg-grey w-75">
            <Artista 
            nombre='Ramma'
            imagen={fotoartista}
            time='1000'
            />
            <Artista 
            nombre='Fosse'
            imagen={fotoartista}
            time='1800'
            />
            <Artista 
            nombre='Valuto'
            imagen={fotoartista}
            time='2100'
            />
            <Artista 
            nombre='Wave'
            imagen={fotoartista}
            time='2100'
            />
            <Artista 
            nombre='ARA'
            imagen={fotoartista}
            time='2100'
            />
            <Artista 
            nombre='Tadu'
            imagen={fotoartista}
            time='2100'
            />
        </div>
    </div>
    )
}

export default Artistas;