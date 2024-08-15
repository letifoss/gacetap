import React from "react";
import '../App.css'

import AOS from "aos";
import { useEffect } from "react";

import slide1 from "../imagenes/foto4.jpeg"
import slide2 from "../imagenes/foto2.jpeg"
import slide3 from "../imagenes/foto1.jpeg"
function Eventos(){

    useEffect(() => {
        AOS.refreshHard(); 
      }, []);
      
    return (
    <div className="contenedor banner">
    <h2 className="mt-5">EVENTOS</h2>
    <div className="text-center w-100 p-3 mt-5 mb-5 text text-white">
        <h3>Gaceta Play, además de ser una plataforma para artistas, se ha encargado de organizar camps creativos y shows inmersivos que van más allá de lo tradicional.</h3>
        <h3 className="mt-5">Los camps reúnen a músicos y creativos en retiros inspiradores para colaborar y explorar nuevas ideas. Los shows, diseñados para ser experiencias únicas, conectan profundamente a artistas y público. A través de estos eventos, Gaceta Play crea una comunidad unida y apasionada por la música.</h3>
    </div>
    <div id="carouselExampleAutoplaying" class="carousel slide carrousel carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    )
}

export default Eventos;