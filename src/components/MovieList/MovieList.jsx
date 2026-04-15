import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import { OrbitProgress } from 'react-loading-indicators';

const MovieList = ({ movies, setMovies }) => {
  const [isLoading, setIsLoading] = React.useState(true);

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
      .then((json) => {
        setMovies(json.results);
        // setIsLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(
        setTimeout(() => {
          setIsLoading(false);
        }, 1000), // para teste
      );
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="movie-loading">
          <OrbitProgress color="#fff" size="medium" />
        </div>
      ) : (
        <section className="movie-list">
          <MovieCard movies={movies} />
        </section>
      )}
    </>
  );
};

export default MovieList;
