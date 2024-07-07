import React from "react";
import "../styles/Contacto.css";
import '../App.css'

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
    <form action="https://formsubmit.co/letifossemale@gmail.com" method="POST" class="d-flex flex-column text-dark" >
        <input type="text" placeholder="Nombre completo" class="m-1 p-1" name="name"/>
        <input type="email" placeholder="E-mail" class="m-1 p-1" name="email"/>
        <textarea id="" placeholder="Mensaje" rows="6" class="m-1 p-1" name="subject" ></textarea>
        <input type="hidden" name="_next" value="https://gacetap.vercel.app/contacto" />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit" class="p-2 mt-2 submit w-25">Enviar mensaje</button>
    </form>
    </div>
    </>
    )
}

export default Contacto;