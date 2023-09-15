import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 
import FormBusqueda from "../FormBusqueda/FormBusqueda";; 


function Header() {
  return (
    <header>
      
      <div className="logo">
        <img className="logoimg" src="./logo.jpg" alt="logo"></img>
        <p className= "logo">RePelis</p>
      </div>
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
          <li><Link to="/todas-las-peliculas">Ver todas peliculas</Link></li>
          <li><Link to="/todas-las-series">Ver todas series</Link></li>
        </ul>
      </nav>
      {/*<div className="search-bar">
        <FormBusqueda />
  </div>*/}
    </header>
  );
}

export default Header;