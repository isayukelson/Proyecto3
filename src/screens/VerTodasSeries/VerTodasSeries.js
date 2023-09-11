import React, { Component } from "react";

import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import Card from "../../componentes/Card/Card";

import "./VerTodasSeries.css";

class VerTodasSeries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [],
            totalPaginas: 500,
            numeroPagina: 1,
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&page=1")
            .then(response => response.json())
            .then(data => {

                this.setState({ 
                    series: data.results,
                })

                console.log("Ya están las series")
            })
            .catch(error => console.log(error))
    }

    pasarPagina() {

        if (this.state.numeroPagina !== this.state.totalPaginas) {
            fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&page=${this.state.numeroPagina + 1}`)
                .then(response => response.json())
                .then(data => {
                    
                    let seriesNuevas = data.results
                    
                    this.setState({ 
                        series: this.state.series.concat(seriesNuevas)
                    })
                    
                    this.setState({
                        numeroPagina: this.state.numeroPagina + 1
                    })

                    console.log("Ya están las series")
                })
                .catch(error => console.log(error))
        } else {
            alert("No hay más páginas")
        }

        console.log(this.state.series)
    }

    render() {
        return (
            <>
                <Header />
                <FormBusqueda />
                <main className="main-ver-todas-las-peliculas"> 
                <div className="peliculas-container">
                 {
                      this.state.series.map((serie, index) => <Card key={index} pelicula={serie} />)
                }
                </div>

                    <button className="button-cargar-series" onClick={() => this.pasarPagina()}>Cargar más series</button> 
                </main>

                <Footer />
            </>
        )
    }
}

export default VerTodasSeries;
