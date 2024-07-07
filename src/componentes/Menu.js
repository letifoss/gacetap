import React from "react";
import "../styles/Menu.css"
import '../App.css'

import { Link } from "react-router-dom";

import logomenu from '../imagenes/LOGO-BLANCO-02.png'

function Menu(){
   
    return (
        <div className="d-flex flex-row justify-content-around">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <Link to="/">INICIO</Link>
                <Link to="/nosotros">NOSOTROS</Link>
                <Link to="/eventos">EVENTOS</Link>
                <Link to="/lanzamientos">LANZAMIENTOS</Link>
                <Link to="/contacto">CONTACTO</Link>
              </ul>
            </div>
          </nav>
          </div>
    );
}

export default Menu;