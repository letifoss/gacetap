import React, { useState } from "react";
import "../styles/Contacto.css";
import "../App.css";

import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Contacto() {
  const [enviado, setEnviado] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    setEnviado(true);
  };

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center text">
      {!enviado ? (
        <>
          <h3 className="m-5 text-white text-center">
            Si tenés dudas o consultas, contáctanos!
          </h3>
          <form
            onSubmit={handleSubmit} 
            action="https://formsubmit.co/letifossemale@gmail.com"
            method="POST"
            className="d-flex flex-column text-dark"
          >
            <input
              type="text"
              placeholder="Nombre completo"
              className="m-1 p-1"
              name="name"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="m-1 p-1"
              name="email"
            />
            <textarea
              placeholder="Mensaje"
              rows="6"
              className="m-1 p-1"
              name="subject"
            ></textarea>
            <input type="hidden" name="_next" value="/contacto" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit" className="p-2 mt-2 submit">
              Enviar mensaje
            </button>
          </form>
        </>
      ) : (
        <div>
        <div class="d-flex flex-column alert alert-secondary" role="alert">
        Gracias por tu mensaje! Nos comunicaremos contigo a la brevedad.
        </div>
        <Link to="/">
            <h5 className="text-white text-center" >Volver al inicio</h5>
        </Link>
        </div>
      )}
    </div>
  );
}

export default Contacto;
