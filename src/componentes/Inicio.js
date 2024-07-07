import React from "react";
import '../styles/Home.css';

import logoprincipal from '../imagenes/logoblanco700.png';

function Inicio(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
        <section className="logo">
          <img src={logoprincipal} alt="logo gaceta" />
        </section>
        <section className="presentacion text-white mb-5" data-aos="fade-right">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, consectetur consequatur voluptatum eveniet ipsum odit doloribus reprehenderit hic ad ratione.</h1>
        </section>
      </div>
    )
}

export default Inicio;