import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import { OrbitProgress } from 'react-loading-indicators';
import { fetchMovies } from '../../services/api';

const MovieList = ({ movies, setMovies }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Erro ao carregar os filmes', error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
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
