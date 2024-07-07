import React from "react";
import '../styles/Footer.css'

function Footer(){
    return(
        <>
        <footer class="footer d-flex justify-content-around">
            <div class="d-flex flex-column justify-content-center">
                <a href="" class="mb-3"><b> Volver al inicio </b></a>
                <a href="">Sobre nosotros</a>
                <a href="">Eventos</a>
                <a href="">Lanzamientos</a>
                <a href="">Contacto</a>
            </div>
            <div class="d-flex align-items-center">
                <a href="" class="p-3"><img src="./imagenes/iconig.png" alt="logoinstagram" width="30px" class="footericon" /></a>
                <a href="" class="p-3"><img src="./imagenes/icontiktok.png" alt="logotiktok" width="30px" class="footericon" /></a>
            </div>
        </footer>
        </>
    )
}

export default Footer;