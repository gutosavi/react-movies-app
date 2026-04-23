import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import { OrbitProgress } from 'react-loading-indicators';
import { fetchMovies } from '../../services/apiGet';
import useDebounce from '../../hooks/useDebounce';

const MovieList = ({ inputValue, movies, setMovies }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterList, setFilterList] = React.useState([]);
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  React.useEffect(() => {
    const resultado = movies.filter((movie) =>
      movie.title?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
    setFilterList(resultado);
  }, [debouncedSearchTerm, movies]);

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
          <MovieCard movies={filterList} />
        </section>
      )}
    </>
  );
};

export default MovieList;
