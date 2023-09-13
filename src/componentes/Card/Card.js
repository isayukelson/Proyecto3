import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vermas : false,
            favorita : false,
        }
    }

    componentDidMount() {
        let peliculasFavoritas = localStorage.getItem("peliculasFavoritas")
        peliculasFavoritas = JSON.parse(peliculasFavoritas)
       
        let seriesFavoritas = localStorage.getItem("seriesFavoritas")
        seriesFavoritas = JSON.parse(seriesFavoritas)

        if (peliculasFavoritas === null) {
            peliculasFavoritas = []
        }

        if (seriesFavoritas === null) {
            seriesFavoritas = []
        }

        if (peliculasFavoritas.includes(this.props.pelicula.id)) {
            this.setState({ favorita: true })
        } else if (seriesFavoritas.includes(this.props.pelicula.id)) {
            this.setState({ favorita: true })
        } else {
            this.setState({ favorita: false })
        }
    }
    
    agregaQuitaFavoritos(id) {
        //console.log(`Clic en "Quitar de favoritos" para el ID: ${id}`);
        let peliculasFavoritas = localStorage.getItem("peliculasFavoritas")
        peliculasFavoritas = JSON.parse(peliculasFavoritas)
        
        let seriesFavoritas = localStorage.getItem("seriesFavoritas")
        seriesFavoritas = JSON.parse(seriesFavoritas)

        if (peliculasFavoritas === null) {
            peliculasFavoritas = []
        }

        if (seriesFavoritas === null) {
            seriesFavoritas = []
        }

        if (peliculasFavoritas.includes(id)) {
            peliculasFavoritas.splice(peliculasFavoritas.indexOf(id), 1)
            localStorage.setItem("peliculasFavoritas", JSON.stringify(peliculasFavoritas))
            this.setState({ favorita: false })
            
            console.log('Estado actualizado a favorita: false');

        } else if (seriesFavoritas.includes(id)) {
            seriesFavoritas.splice(seriesFavoritas.indexOf(id), 1)
            localStorage.setItem("seriesFavoritas", JSON.stringify(seriesFavoritas))
            this.setState({ favorita: false })
            
            console.log('Estado actualizado a favorita: false');

        } else {
            if (this.props.pelicula.name) {
                seriesFavoritas.push(id)
                localStorage.setItem("seriesFavoritas", JSON.stringify(seriesFavoritas))
                this.setState({ favorita: true })
              
                console.log('Estado actualizado a favorita: true');

            } else {
                peliculasFavoritas.push(id)
                localStorage.setItem("peliculasFavoritas", JSON.stringify(peliculasFavoritas))
                this.setState({ favorita: true })
                
                console.log('Estado actualizado a favorita: true');
            }
        }
    }

    render() {
        return (
          <article className="article-home-peliculas-populares">
            <img
              src={`https://image.tmdb.org/t/p/w342${this.props.pelicula.poster_path}`}
              alt={this.props.pelicula.title}
            />
            <h2>{this.props.pelicula.title}</h2>
            <h2>{this.props.pelicula.name}</h2>
    
            {this.props.mostrarBotonVerMas && (
              <div>
                {this.state.vermas === true ? (
                  <section className="article-home-peliculas-populares-descripcion">
                    <p>Descripción:</p>
                    {this.props.pelicula.overview === "" ? (
                      <p>No hay descripción</p>
                    ) : (
                      <p>{this.props.pelicula.overview}</p>
                    )}
                  </section>
                ) : null}
                <button
                  onClick={() => this.setState({ vermas: !this.state.vermas })}
                >
                  Ver {this.state.vermas ? "menos" : "más"}
                </button>
              </div>
            )}
    
            {/* Botón de agregar/quitar favoritos */}
            <button
              onClick={() => this.agregaQuitaFavoritos(this.props.pelicula.id)}
            >
              {this.state.favorita ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button>
    
            {/* Enlace para ver detalles */}
            {this.props.mostrarEnlaceVerDetalles &&
              (this.props.pelicula.name ? (
                <Link to={`/serie/${this.props.pelicula.id}`}>Ver detalles</Link>
              ) : (
                <Link to={`/pelicula/${this.props.pelicula.id}`}>Ver detalles</Link>
              ))}
          </article>
        );
      }
    }
    
    export default Card;