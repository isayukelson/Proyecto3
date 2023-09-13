import React, { Component } from "react";

import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import FormBusqueda from "../../componentes/FormBusqueda/FormBusqueda";
import Card from "../../componentes/Card/Card";
import "./ResultadoBusqueda.css";

class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: this.props.match.params.busqueda,
            resultados: []
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=7e2125641ec3ddbc6ebddb7479ee611c&language=es-ES&query=${this.props.match.params.busqueda}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    resultados: data.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <Header />
                <FormBusqueda />
                {
                    this.state.busqueda !== "" ?
                        <p>{this.state.busqueda}</p> :
                        <p>Cargando...</p>
                }
                {
                    this.state.resultados.length > 0 ?
                        this.state.resultados.map((resultado, i) =>

                            <Card
                                key={i}
                                id={resultado.id}
                                nombre={resultado.title}
                                imagen={resultado.poster_path}
                            />) :
                        <p>Cargando...</p>
                }
                <Footer />

            </>
        )
    }
}

export default ResultadoBusqueda;
