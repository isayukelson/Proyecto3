import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import ContentGroup from './PeliCartel';
import Header from './Header';
import Footer from './Footer';

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
   
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c`;
    //const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=7e2125641ec3ddbc6ebddb7479ee611c`;

    
    fetch(popularMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        // Procesar y actualiza el estado d los datos
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener películas populares:', error);
      });

    // Solicitud GET a la API - completar
    fetch(nowPlayingUrl)
      .then((response) => response.json())
      .then((data) => {
        // Procesar los datos recibidos de la API y actualizar el estado nowPlayingMovies
        setNowPlayingMovies(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener películas en cartelera:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Movie App</h1>
      <SearchForm />
      <ContentGroup title="Películas más populares" items={popularMovies} />
      <ContentGroup title="Películas en cartel" items={nowPlayingMovies} />
      <Footer />
    </div>
  );
}

export default HomePage;
