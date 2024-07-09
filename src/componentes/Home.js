import React, { useEffect } from 'react';
import '../styles/Home.css';
import '../App.css';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imagestart from './Imagestart';
import Inicio from './Inicio';
import Imagelink from './Imagelink';
import logoprincipal from '../imagenes/logoblanco700.png';

function Home() {
  useEffect(() => {

    AOS.init({
      offset: 200,
      once: false,
      delay: 20
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className='banner'>
      <link rel="preload" href={logoprincipal} as="image" />
      <Imagestart />
      <Inicio />
      <Imagelink />
    </div>
  );
}

export default Home;
