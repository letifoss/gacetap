import React from "react";
import "../styles/Menu.css"
import { Link } from "react-router-dom";

import logomenu from '../imagenes/LOGO-BLANCO-02.png'

function Menu(){
   
    return (
        <div class="d-flex flex-row justify-content-around">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <img class="navbar-brand" src={logomenu}alt="logo gaceta" width="90px" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav align-items-center">
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