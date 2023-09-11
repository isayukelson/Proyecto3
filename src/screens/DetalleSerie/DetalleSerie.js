import React, { Component } from "react";

import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import "./DetalleSerie.css";

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serie: [],
        }
    }

    componentDidMount() {
        let serie = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${serie}?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES`)
        .then(response => response.json())
        .then(data => {
            this.setState({ serie: data })
        })
        .catch(error => console.log(error))

        
    }

    render() {
        return (
            <>
            <Header/>
                <FormBusqueda/>
                <main className="main-home">
                    <h1>Detalle de Serie</h1>
                    <img src={`https://image.tmdb.org/t/p/w342${this.state.serie.poster_path}`} alt={this.state.serie.title} />
                    <ul>
                        <li>Ranking: {this.state.serie.vote_average} </li>
                        <li>Estreno: {this.state.serie.release_date}</li>
                        <li>Sinopsis: {this.state.serie.overview}</li>
                    </ul>
                    <button onClick={() => this.agregaQuitaFavoritos(this.props.pelicula)}>{this.state.favorita ? "Quitar de favoritos" : "Agregar a favoritos"}</button>

                </main>
                <Footer />
            </>
        )
    }
}

export default DetalleSerie;
