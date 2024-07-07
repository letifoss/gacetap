import React, { useEffect } from 'react';
import '../styles/Home.css';
import '../App.css'

import Inicio from './Inicio';
import Imagelink from './Imagelink';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Inicio />
      <Imagelink />
    </>
  );
}

export default Home;
