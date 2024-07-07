import React from "react";
import '../styles/Footer.css'
import '../App.css'

import iconig from '../imagenes/iconig.png';
import icontiktok from '../imagenes/icontiktok.png';

function Footer(){
    return(
        <>
        <footer className="footer d-flex justify-content-around">
            <div className="d-flex flex-column justify-content-center">
                <a href="" className="mb-3"><b> Volver al inicio </b></a>
                <a href="">Sobre nosotros</a>
                <a href="">Eventos</a>
                <a href="">Lanzamientos</a>
                <a href="">Contacto</a>
            </div>
            <div className="d-flex align-items-center">
                <a href="" className="p-3"><img src={iconig} alt="logoinstagram" width="30px" className="footericon" /></a>
                <a href="" className="p-3"><img src={icontiktok} alt="logotiktok" width="30px" className="footericon" /></a>
            </div>
        </footer>
        </>
    )
}

export default Footer;