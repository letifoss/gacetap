import React from "react";
import "../styles/Contacto.css";
import AOS from "aos";
import { useEffect } from "react";

function Contacto(){

    useEffect(() => {
        AOS.refreshHard(); 
      }, []);
      
    return(
    <>
    <div class="d-flex flex-column align-items-center justify-content-center text">
    <h3 class="m-5 text-white text-center">Si tenés dudas o consultas, contáctanos!</h3>
    <form action="" class="d-flex flex-column text-dark">
        <input type="text" placeholder="Nombre" class="m-1 p-1" />
        <input type="text" placeholder="Apellido" class="m-1 p-1" />
        <input type="email" placeholder="E-mail" class="m-1 p-1" />
        <textarea name="" id="" placeholder="Mensaje" rows="6" class="m-1 p-1"></textarea>
    </form>
    <button type="submit" class="p-2 mt-2 submit">Enviar mensaje</button>
    </div>
    </>
    )
}

export default Contacto;