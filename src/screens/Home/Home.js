import React, { Component } from "react";

import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import Card from "../../componentes/Card/Card";

import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            series: [],
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&page=1")
            .then(response => response.json())
            .then(data => {

                let arrayPeliculas = []

                for (let i = 0; i < 5; i++) {
                    arrayPeliculas.push(data.results[i])
                }

                this.setState({ 
                    peliculas: arrayPeliculas 
                })

            })
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&page=1")
            .then(response => response.json())
            .then(data => {
                
                let arraySeries = []

                for (let i = 0; i < 5; i++) {
                    arraySeries.push(data.results[i])
                }

                this.setState({ 
                    series: arraySeries 
                })

            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <Header />
                <FormBusqueda />
                <main className="main-home">
                    <h1>Películas populares</h1>
                    <section className="section-home-peliculas-populares">
                        {
                            this.state.peliculas.map((pelicula, index) => <Card pelicula={pelicula} key={index} />)
                        }
                    </section>
                    <h1>Series populares</h1>
                    <section className="section-home-series-populares">
                        {
                            this.state.series.map((serie, index) => {

                                serie.title = serie.name

                                return (
                                    <Card pelicula={serie} key={index} />
                                )
                            })
                        }
                    </section>
                </main>
                <Footer />
            </>
        ) 
    }
}

export default Home;
