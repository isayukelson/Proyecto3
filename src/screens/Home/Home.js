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
                    <h1>Películas & Series Populares</h1>
                    <div className="card-container">
                        {this.state.peliculas.map((pelicula, index) => (
                         <Card
                        key={index} //se asigna una key única utilizando el índice
                         pelicula={pelicula}
                        mostrarBotonVerMas={true} 
                        mostrarEnlaceVerDetalles={true} 
                        />
                        ))}
                        
                        {this.state.series.map((serie, index) => (
                        <Card
                            key={index}
                            pelicula={serie}
                         mostrarBotonVerMas={true} 
                            mostrarEnlaceVerDetalles={true} 
                        />
                        ))}
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}
                        
export default Home;