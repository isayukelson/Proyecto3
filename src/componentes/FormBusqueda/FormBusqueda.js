import React, { Component } from "react";
import Card from "../Card/Card"; 

class FormBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      resultados: [],
    };
  }

  guardarBusqueda(event) {
    this.setState({
      busqueda: event.target.value,
    });
  }

  enviarBusqueda(event) {
    event.preventDefault();

    if (this.state.busqueda === "") {
      console.log("No has introducido nada");
    } else {
      
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&query=${this.state.busqueda}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            resultados: data.results,
          });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <div className="form-busqueda">
        <form onSubmit={(event) => this.enviarBusqueda(event)}>
          <input
            onChange={(event) => this.guardarBusqueda(event)}
            type="text"
            placeholder="Buscar..."
            value={this.state.busqueda}
            className="input-busqueda"
          />
          <button type="submit" className="boton-busqueda">Buscar</button>
        </form>
        <div className="resultados-container">
          {this.state.resultados.map((resultado, index) => (
            // Mapea los resultados y muestra cada uno utilizando el component Card
            <Card key={index} pelicula={resultado} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormBusqueda;
