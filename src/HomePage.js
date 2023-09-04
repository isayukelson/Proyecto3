import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import ContentGroup from './PeliCartel';

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);


    useEffect(() => {
    
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=7e2125641ec3ddbc6ebddb7479ee611c`;
    const nowPlayingUrl    = ''

    // solicitud GET a la API
    fetch(popularMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        //procesar los datos recibidos de la API y actualizar el estado popularMovies
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener películas populares:', error);
      });
      
    fetch(nowPlayingUrl)
      .then((response) => response.json())
      .then((data) => {
       
        setNowPlayingMovies(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener películas en cartelera:', error);
      });
   
  }, []);
  

  return (
    <div>
      <h1>Movie App</h1>
      <SearchForm />
      <ContentGroup title="Películas más populares" items={popularMovies} />
      <ContentGroup title="Películas en cartel" items={nowPlayingMovies} />
    </div>
  );
}

export default HomePage;
