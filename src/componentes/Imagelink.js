import React from "react";
import '../styles/Home.css'

import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

import foto1 from '../imagenes/foto1.jpeg';
import foto3 from '../imagenes/foto3.jpeg';
import foto4 from '../imagenes/foto4.jpeg';

function Imagelink() {

  return (
    <>
    <div className="d-flex justify-content-evenly mb-5 flex-wrap align-content-center">
    <Link to="/eventos" className="imagelink">
      <div className="d-flex justify-content-center align-items-center position-relative" data-aos="fade-right">
        <img src={foto1} alt="foto artistas" width="350px" height="367px" className="m-4 m-md-4 m-sm-4 border-0" />
        <div className="d-flex position-absolute justify-content-center align-items-center p-card-eventos image-shadow">
          <h2 className="d-flex text-center">EVENTOS</h2>
          <i className="bi bi-calendar-event ml-3 mb-2"></i>
        </div>
      </div>
      </Link>
      <Link to="/lanzamientos" className="imagelink">
      <div className="d-flex justify-content-center align-items-center position-relative" data-aos="fade-up">
        <img src={foto3} alt="foto productores" width="350px" height="367px" className="m-4 m-md-4 m-sm-4 border-0 " />
        <div className="d-flex position-absolute justify-content-center align-items-center p-card-eventos image-shadow">
          <h2 className="d-flex text-center">LANZAMIENTOS</h2>
          <i className="bi bi-skip-end-fill ml-3 mb-2"></i>
        </div>
      </div>
      </Link>
      <Link to="/artistas" className="imagelink">
        <div className="d-flex justify-content-center align-items-center position-relative mb-4" data-aos="fade-left">
          <img src={foto4} alt="fotos artistas" width="350px" height="367px" className="m-4 m-md-4 m-sm-4 border-0" />
          <div className="d-flex position-absolute justify-content-center align-items-center p-card-eventos image-shadow">
            <h2 className="d-flex text-center">CONOCÉ A NUESTROS ARTISTAS</h2>
          </div>
        </div>
      </Link>
    </div>
    
    </>
  );
}

export default Imagelink;
