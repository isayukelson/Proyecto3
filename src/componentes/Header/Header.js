import React from "react";
function Header() {
    return (
      <header>
        <div className="logo">Nombre</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><Link to="/ver-todas/populares">Ver Todas Populares</Link></li>
            <li><Link to="/ver-todas/cartel">Ver Todas en Cartelera</Link></li>
    
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;