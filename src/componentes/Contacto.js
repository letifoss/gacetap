import React, { useState } from "react";
import "../styles/Contacto.css";
import "../App.css";

import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCargando(true); 

    try {
      const formData = new FormData(event.target);

      const response = await fetch("https://formsubmit.co/letifossemale@gmail.com", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setEnviado(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setCargando(false); 
    }
  };

  return (
    <div className="d-flex flex-column align-items-center text banner">
      {!enviado ? (
        <>
          <h3 className="m-5 text-white text-center">
            Si tenés dudas o consultas, contáctanos!
          </h3>
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/letifossemale@gmail.com"
            method="POST"
            className="d-flex flex-column text-dark mb-5"
          >
            <input
              type="text"
              placeholder="Nombre completo"
              className="m-1 p-2"
              name="name"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="m-1 p-2"
              name="email"
            />
            <textarea
              placeholder="Mensaje"
              rows="6"
              className="m-1 p-2"
              name="subject"
            ></textarea>
            <input type="hidden" name="_next" value="/contacto" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit" className="p-2 mt-2 submit" disabled={cargando}>
              {cargando ? "Enviando... " : "Enviar mensaje"}
            </button>
          </form>
        </>
      ) : (
        <div>
          <div className="d-flex flex-column alert alert-secondary" role="alert">
            Gracias por tu mensaje! Nos comunicaremos contigo a la brevedad.
          </div>
          <Link to="/">
            <h5 className="text-white text-center link-dark">Volver al inicio</h5>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Contacto;
