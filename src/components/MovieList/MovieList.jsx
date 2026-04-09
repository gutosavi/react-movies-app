import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies, setMovies }) => {
  const getMovies = () => {
    const url = 'https://api.themoviedb.org/3/discover/movie';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="movie-list-container">
      <MovieCard movies={movies} />
    </section>
  );
};

export default MovieList;
