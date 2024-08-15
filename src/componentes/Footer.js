import React from "react";
import '../styles/Footer.css';
import '../App.css';
import { NavLink } from "react-router-dom"; // Importa NavLink en lugar de Link

import iconig from '../imagenes/iconig.png';
import icontiktok from '../imagenes/icontiktok.png';

import Scrolltotop from './Scrolltotop'; 

function Footer(){
    return(
        <footer className="footer d-flex justify-content-evenly ">
            <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-center justify-content-center">
                <a href="/" className="m-1 fw-bold">
                    Volver al inicio
                </a>
                <NavLink to="/nosotros" className="p-3">Sobre nosotros </NavLink>
                <NavLink to="/nosotros" className="p-3">Artistas</NavLink>
                <NavLink to="/eventos"  className="p-3">Eventos</NavLink>
                <NavLink to="/lanzamientos" className="p-3">Lanzamientos</NavLink>
                <NavLink to="/contacto" className="p-3">Contacto</NavLink>   
                <NavLink to="/contacto" className="p-3 fw-bold">Trabaja con nosotros!</NavLink> 
            </div>
            <div className="d-flex align-items-center">
                <a href="https://www.instagram.com/gacetaplay/" alt="logo instagram" target="_blank" rel="noopener noreferrer" className="p-3"><img src={iconig} alt="logoinstagram" width="30px" className="footericon" /></a>
                <a href="https://www.tiktok.com/@gaceta.play" alt="logo tiktok" target="_blank" rel="noopener noreferrer" className="p-3"><img src={icontiktok} alt="logotiktok" width="30px" className="footericon" /></a>
            </div>
        </footer>
    );
}

export default Footer;
