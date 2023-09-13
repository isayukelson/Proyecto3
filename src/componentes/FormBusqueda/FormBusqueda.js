import React, { Component } from "react";
import {Link } from "react-router-dom";
import "./FormBusqueda.css";

class FormBusqueda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      busqueda: ""
    }
  }


  guardarBusqueda(evento){
    this.setState({
      busqueda: evento.target.value
    })
  }
  


  render() {
    return (
      <div>
        <form onSubmit={e=>e.preventDefault()}>
          <input onChange={(e) => this.guardarBusqueda(e)} type="text" name="busqueda" value={this.state.busqueda} />
          <button type="submit"><Link to={`/resultado-busqueda/${this.state.busqueda}`}>Buscar</Link></button>
        </form>
      </div>
    );
  }
}
export default FormBusqueda;
