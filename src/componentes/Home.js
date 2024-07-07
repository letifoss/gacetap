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
    <div className='banner'>
      <Inicio />
      <Imagelink />
    </div>
  );
}

export default Home;
