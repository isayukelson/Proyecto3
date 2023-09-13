import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import "./DetallePelicula.css";
import Card from "../../componentes/Card/Card";

class DetallePelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: {},
      //serie: {},
    };
  }

  componentDidMount() {
    let pelicula = this.props.match.params.id;
    fetch(
      `https://api.themoviedb.org/3/movie/${pelicula}?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pelicula: data });
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
        <h1>Detalle de Pelicula</h1>
         

          <Card
            pelicula={this.state.pelicula}
            mostrarBotonVerMas={false} // No mostrar botón Ver más
            mostrarEnlaceVerDetalles={false} // No mostrar enlace Ver detalles
            ref={(ref) => (this.cardRef = ref)} // Referencia a la instancia de Card
          />
          <ul>
            <li>Ranking: {this.state.pelicula.vote_average} </li>
            <li>Estreno: {this.state.pelicula.release_date} </li>
            <li>Sinopsis: {this.state.pelicula.overview}</li>
          </ul>

        </main>
        <Footer />
      </>
    );
  }
}

export default DetallePelicula;
