import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import "./DetalleSerie.css";
import Card from "../../componentes/Card/Card";

class DetalleSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: {},
    };
  }

  componentDidMount() {
    let serieId = this.props.match.params.id;
    fetch(
      `https://api.themoviedb.org/3/tv/${serieId}?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ serie: data });
      })
      .catch((error) => console.log(error));
  }

  // Llama a la función agregaQuitaFavoritos de Card.js
  agregaQuitaFavoritos = (id) => {
    if (this.cardRef) {
      this.cardRef.agregaQuitaFavoritos(id);
    }
  }

  render() {
    return (
      <>
        <Header />
        <FormBusqueda />
        <main className="main-home">
          <h1>Detalle de Serie</h1>
          
          <Card
            pelicula={this.state.serie} // Cambia de "serie" a "pelicula" para que el componente Card pueda manejarlo de manera genérica
            mostrarBotonVerMas={false} // No mostrar botón Ver más
            mostrarEnlaceVerDetalles={false} // No mostrar enlace Ver detalles
            ref={(ref) => (this.cardRef = ref)} // Referencia a la instancia de Card
          />
          <ul>
            <li>Ranking: {this.state.serie.vote_average} </li>
            <li>Estreno: {this.state.serie.first_air_date}</li>
            <li>Sinopsis: {this.state.serie.overview}</li>
          </ul>
        </main>
        <Footer />
      </>
    );
  }
}

export default DetalleSerie;
