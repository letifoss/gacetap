import React from "react";
import '../styles/Footer.css';
import '../App.css';
import { NavLink } from "react-router-dom"; // Importa NavLink en lugar de Link

import iconig from '../imagenes/iconig.png';
import icontiktok from '../imagenes/icontiktok.png';

import Scrolltotop from './Scrolltotop'; 

function Footer(){
    return(
        <footer className="footer d-flex justify-content-around">
            <div className="d-flex flex-column justify-content-center">
                <a href="/" className="m-1 mb-3">
                    Volver al inicio
                </a>
                <NavLink to="/nosotros" activeClassName="active" className="m-1">Sobre nosotros </NavLink>
                <NavLink to="/eventos" activeClassName="active"  className="m-1">Eventos</NavLink>
                <NavLink to="/lanzamientos" activeClassName="active" className="m-1">Lanzamientos</NavLink>
                <NavLink to="/contacto" activeClassName="active" className="m-1">Contacto</NavLink>
            </div>
            <div className="d-flex align-items-center">
                <a href="https://www.instagram.com/gacetaplay/" alt="logo instagram" target="_blank" rel="noopener noreferrer" className="p-3"><img src={iconig} alt="logoinstagram" width="30px" className="footericon" /></a>
                <a href="https://www.tiktok.com/@gaceta.play" alt="logo tiktok" target="_blank" rel="noopener noreferrer" className="p-3"><img src={icontiktok} alt="logotiktok" width="30px" className="footericon" /></a>
            </div>
        </footer>
    );
}

export default Footer;
