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



function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/lanzamientos" element={<Lanzamientos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </header>
      <footer>
        <Footer />
      </footer>
      </Router>
    </div>
  );
}

export default App;
