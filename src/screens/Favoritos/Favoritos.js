import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import Card from "../../componentes/Card/Card";

import "./Favoritos.css";

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
            seActualizo: false
        }
    }
    
    fetchPeliculas() {
        let peliculasFavoritas = localStorage.getItem("peliculasFavoritas");
        peliculasFavoritas = JSON.parse(peliculasFavoritas);
            
        if (peliculasFavoritas === null) {
            peliculasFavoritas = [];
        }

        peliculasFavoritas.forEach(pelicula => {
            fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES`)
            .then(response => response.json())
            .then(data => {
                let peliculasFavoritas = this.state.peliculasFavoritas;
                peliculasFavoritas.push(data);
                this.setState({ peliculasFavoritas: peliculasFavoritas });
            })
            .catch(error => console.log(error));
        });
    }

    fetchSeries() {
        let seriesFavoritas = localStorage.getItem("seriesFavoritas");
        seriesFavoritas = JSON.parse(seriesFavoritas);

        if (seriesFavoritas === null) {
            seriesFavoritas = [];
        }        

        seriesFavoritas.forEach(serie => {
            fetch(`https://api.themoviedb.org/3/tv/${serie}?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES`)
            .then(response => response.json())
            .then(data => {
                let seriesFavoritas = this.state.seriesFavoritas;
                seriesFavoritas.push(data);
                this.setState({ seriesFavoritas: seriesFavoritas });
            })
            .catch(error => console.log(error));
        });
    }

    seActualizoEstado() {
        this.setState({ seActualizo: !this.state.seActualizo });
    }
    
    componentDidMount() {
        this.fetchPeliculas();
        this.fetchSeries();
    }

    componentDidUpdate() {
        if (this.state.seActualizo) {
            this.setState({ peliculasFavoritas: [], seriesFavoritas: [] });
            this.fetchPeliculas();
            this.fetchSeries();
            this.seActualizoEstado();
        }
    }

    render() {
        return (
            <>
                <Header />
                <FormBusqueda />
                <main className="main-favoritos">
                    <h1>Peliculas favoritas</h1>
                    <section className="section-favoritos-peliculas">
                        {
                            this.state.peliculasFavoritas.length === 0 ?
                            <p>No tienes películas favoritas</p> :
                            <>
                                {this.state.peliculasFavoritas.map((pelicula, index) => <Card pelicula={pelicula} key={index} mostrarBotonVerMas={true} mostrarEnlaceVerDetalles={true} seActualizoEstado={this.seActualizoEstado.bind(this)} />)}
                            </>
                        }
                    </section>
                    <h1>Series favoritas</h1>
                    <section className="section-favoritos-series">
                        {
                            this.state.seriesFavoritas.length === 0 ?
                            <p>No tienes series favoritas</p> :
                            <>
                                {this.state.seriesFavoritas.map((serie, index) => <Card pelicula={serie} key={index} mostrarBotonVerMas={true} mostrarEnlaceVerDetalles={true} seActualizoEstado={this.seActualizoEstado.bind(this)} />)}
                            </>
                        }
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}

export default Favoritos;
