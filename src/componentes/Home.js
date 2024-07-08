import React, { useEffect } from 'react';
import '../styles/Home.css';
import '../App.css'
import { Link } from "react-router-dom";

import logoprincipal from '../imagenes/logoblanco700.png';

import foto1 from '../imagenes/foto1.jpeg';
import foto3 from '../imagenes/foto3.jpeg';
import foto4 from '../imagenes/foto4.jpeg';

import Imagelink from './Imagelink';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  return (
    <div className='banner'>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <section className="logo">
        <img src={logoprincipal} alt="logo gaceta" />
      </section>
      <section className="presentacion text-white" data-aos="fade-right">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, consectetur consequatur voluptatum eveniet ipsum odit doloribus reprehenderit hic ad ratione.</h1>
      </section>
    </div>
    <div className="d-flex justify-content-evenly mb-5 flex-wrap align-content-center">
    <Link to="/eventos" className="imagelink">
      <div className="d-flex justify-content-center align-items-center position-relative" data-aos="fade-right">
        <img src={foto1} alt="" width="350px" height="367px" className="m-4 m-md-4 m-sm-4 border-0" />
        <div className="d-flex position-absolute justify-content-center align-items-center p-card-eventos image-shadow">
          <h2 className="d-flex text-center">EVENTOS</h2>
          <i className="bi bi-calendar-event ml-3 mb-2"></i>
        </div>
      </div>
      </Link>
      <Link to="/lanzamientos" className="imagelink">
      <div className="d-flex justify-content-center align-items-center position-relative" data-aos="fade-up">
        <img src={foto3} alt="" width="350px" height="367px" className="m-4 m-md-4 m-sm-4 border-0 " />
        <div className="d-flex position-absolute justify-content-center align-items-center p-card-eventos image-shadow">
          <h2 className="d-flex text-center">LANZAMIENTOS</h2>
          <i className="bi bi-skip-end-fill ml-3 mb-2"></i>
        </div>
      </div>
      </Link>
      <Link to="/nosotros" className="imagelink">
        <div className="d-flex justify-content-center align-items-center position-relative" data-aos="fade-left">
          <img src={foto4} alt="" width="350px" height="367px" className="m-4 m-md-4 m-sm-4 border-0" />
          <div className="d-flex position-absolute justify-content-center align-items-center p-card-eventos image-shadow">
            <h2 className="d-flex text-center">CONOCÉ A NUESTROS ARTISTAS</h2>
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Home;
