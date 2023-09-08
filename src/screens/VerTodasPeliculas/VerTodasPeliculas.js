import React, { Component } from "react";

import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import Card from "../../componentes/Card/Card";

import "./VerTodasPeliculas.css";

class VerTodasPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            totalPaginas: 500,
            numeroPagina: 1,
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&page=1")
            .then(response => response.json())
            .then(data => {

                this.setState({ 
                    peliculas: data.results,
                })

                console.log("Ya están las pelis")
            })
            .catch(error => console.log(error))
    }

    pasarPagina() {

        if (this.state.numeroPagina !== this.state.totalPaginas) {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&page=${this.state.numeroPagina + 1}`)
                .then(response => response.json())
                .then(data => {
                    
                    let pelisNuevas = data.results
                    
                    this.setState({ 
                        peliculas: this.state.peliculas.concat(pelisNuevas)
                    })
                    
                    this.setState({
                        numeroPagina: this.state.numeroPagina + 1
                    })

                    console.log("Ya están las pelis")
                })
                .catch(error => console.log(error))
        } else {
            alert("No hay más páginas")
        }

        console.log(this.state.peliculas)
    }

    render() {
        return (
            <>
                <Header />
                <FormBusqueda />
                <main className="main-ver-todas-las-peliculas">
                <div className="peliculas-container">
                 {
                 this.state.peliculas.map((pelicula, index) => <Card key={index} pelicula={pelicula} />)
                 }
                 </div>
                 <button className="button-cargar-peliculas" onClick={() => this.pasarPagina()}>Cargar más películas</button>
            </main>
                <Footer />
            </>
        )
    }
}

export default VerTodasPeliculas;
