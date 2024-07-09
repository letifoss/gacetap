import React, { useEffect } from 'react';
import '../styles/Home.css';
import '../App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Imagestart from './Imagestart';
import Inicio from './Inicio';
import Imagelink from './Imagelink';
import logoprincipal from '../imagenes/logoblanco700.png';

function Home() {

  useEffect(() => {
    const image = new Image();
    image.src = logoprincipal;
    image.onload = () => {
      console.log("Imagen precargada:", logoprincipal);
    };
  }, []);

  return (
    <div className='banner'>
      <Imagestart />
      <Inicio />
      <Imagelink />
    </div>
  );
}

export default Home;
