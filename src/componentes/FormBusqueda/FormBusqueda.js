import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./FormBusqueda.css";

class FormBusqueda extends Component{
    constructor(props) {
        super(props)
        this.state = {
            busqueda: "",
        }
    }

    guardarBusqueda(event) {
        this.setState({
            busqueda: event.target.value
        })
    }

    enviarBusqueda(event) {
        event.preventDefault()

        if (this.state.busqueda === "") {
            console.log("No has introducido nada")
        } else {
            console.log("Busqueda " + this.state.busqueda)
        }
    }

    render() {
        return (
            <form onSubmit={(event) => this.enviarBusqueda(event)} className="form-busqueda">
                <input onChange={(event) => this.guardarBusqueda(event)} type="text" placeholder="Buscar..." className="input-busqueda" value={this.state.busqueda}/>
                <button type="submit" className="boton-busqueda">Buscar</button>
            </form>
        )
    }
}

export default FormBusqueda;
