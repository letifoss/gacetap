import './App.css';

import Menu from './componentes/Menu';
import Home from './componentes/Home';
import Footer from './componentes/Footer'
import Nosotros from './componentes/Nosotros';
import Eventos from './componentes/Eventos';
import Lanzamientos from './componentes/Lanzamientos';
import Contacto from './componentes/Contacto';

import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';
import ScrollToTop from './componentes/Scrolltotop';



function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      once: false,
      delay: 20
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
      <header>
        <Menu />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/lanzamientos" element={<Lanzamientos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      <footer>
        <Footer />
      </footer>
      </Router>
    </div>
  );
}

export default App;
