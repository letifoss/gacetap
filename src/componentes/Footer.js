import React from "react";
import '../styles/Footer.css'
import '../App.css'
import { Link } from "react-router-dom";

import iconig from '../imagenes/iconig.png';
import icontiktok from '../imagenes/icontiktok.png';

function Footer(){
    return(
        <>
        <footer className="footer d-flex justify-content-around">
            <div className="d-flex flex-column justify-content-center">
                <Link to="/" className="mb-3"><b> Volver al inicio </b></Link>
                <Link to="/nosotros">Sobre nosotros</Link>
                <Link to="/eventos">Eventos</Link>
                <Link to="/lanzamientos">Lanzamientos</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
            <div className="d-flex align-items-center">
                <a href="https://www.instagram.com/gacetaplay/" target="_blank" className="p-3"><img src={iconig} alt="logoinstagram" width="30px" className="footericon" /></a>
                <a href="https://www.tiktok.com/@gaceta.play" target="_blank" className="p-3"><img src={icontiktok} alt="logotiktok" width="30px" className="footericon" /></a>
            </div>
        </footer>
        </>
    )
}

export default Footer;