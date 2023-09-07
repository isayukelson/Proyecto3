import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">Nombre</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
          <li><Link to="/todas-las-peliculas">Ver todas peliculas</Link></li>
          <li><Link to="/todas-las-series">Ver todas series</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;