import React, { useEffect } from "react";
import '../styles/Home.css';
import '../App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Inicio() {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <section className="presentacion text-white" data-aos="fade-right">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, consectetur consequatur voluptatum eveniet ipsum odit doloribus reprehenderit hic ad ratione.</h1>
      </section>
    </div>
  );
}

export default Inicio;
