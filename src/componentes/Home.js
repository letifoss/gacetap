import React, { useEffect } from 'react';
import '../styles/Home.css';
import '../App.css'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Imagestart from './Imagestart';
import Inicio from './Inicio';
import Imagelink from './Imagelink';

function Home() {

  return (
    <div className='banner'>
    <Imagestart />
    <Inicio />
    <Imagelink />
    </div>
  );
}

export default Home;
