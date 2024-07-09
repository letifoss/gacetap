import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";
import "../App.css";

function Menu() {
  return (
    <div className="d-flex flex-row justify-content-around">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"  
          data-bs-target="#navbarNav"  
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                INICIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link" activeClassName="active">
                NOSOTROS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/artistas" className="nav-link" activeClassName="active">
                ARTISTAS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/eventos" className="nav-link" activeClassName="active">
                EVENTOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/lanzamientos" className="nav-link" activeClassName="active">
                LANZAMIENTOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link" activeClassName="active">
                CONTACTO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
