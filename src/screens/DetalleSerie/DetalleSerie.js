import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import "./DetalleSerie.css";

class DetalleSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: {},
      pelicula: {},
      favorita: false, //  estado la lógica de favoritos
    };
  }

  componentDidMount() {
    const serieId = this.props.match.params.id;

    // Realizar la solicitud para la serie
    fetch(
      `https://api.themoviedb.org/3/tv/${serieId}?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ serie: data });
      })
      .catch((error) => console.log(error));

    
  }

  render() {
    const { serie, pelicula } = this.state;

    return (
      <>
        <Header />
        <FormBusqueda />
        <main className="main-home">
          <h1>Detalle de Serie</h1>
          <img
            src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
            alt={serie.title}
          />
          <ul>
            <li>Ranking: {serie.vote_average} </li>
            <li>Estreno: {serie.first_air_date}</li>
            <li>Sinopsis: {serie.overview}</li>
          </ul>

          
          <button onClick={() => this.agregaQuitaFavoritos(this.props.pelicula)}>
            {this.state.favorita ? "Quitar de favoritos" : "Agregar a favoritos"}
          </button>

          
        </main>
        <Footer />
      </>
    );
  }
}

export default DetalleSerie;
