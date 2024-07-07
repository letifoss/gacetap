import React from "react";
import '../App.css'

import AOS from "aos";
import { useEffect } from "react";

function Eventos(){

    useEffect(() => {
        AOS.refreshHard(); 
      }, []);
      
    return (
        <>
    <div className="contenedor">
    <div className="text-center w-md-100 w-50 mt-5 mb-5 text text-white">
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam debitis incidunt quia dolores voluptatibus repellendus prro. Eos.</h3>
    </div>
    <div className="d-flex justify-content-center align-items-center w-100 mt-5 text mb-5">
        <div id="carouselExampleControls" className="carousel slide carrousel" data-ride="carousel" data-interval="2500">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block" src="./imagenes/foto3.jpeg" alt="First slide" width="500px" height="500px" />
                </div>
                <div className="carousel-item">
                    <img className="d-block" src="./imagenes/foto4.jpeg" alt="Second slide" width="500px" height="500px" />
                </div>
                <div className="carousel-item">
                    <img className="d-block" src="./imagenes/foto2.jpeg" alt="Third slide" width="500px" height="500px" />
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>

    </div>
    </>
    )
}

export default Eventos;