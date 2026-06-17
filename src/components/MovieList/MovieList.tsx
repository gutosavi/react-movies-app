import React from 'react';
import styles from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';
import { OrbitProgress } from 'react-loading-indicators';
import { fetchMovies } from '../../services/apiGet';
import useDebounce from '../../hooks/useDebounce';
import { Movie, MovieProps } from '../../types';

const MovieList = ({ inputValue, movie, setMovie }: MovieProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [filterList, setFilterList] = React.useState<Movie[]>([]);
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  React.useEffect(() => {
    const resultado = movie.filter((movie) =>
      movie.title
        ?.toLowerCase()
        .includes((debouncedSearchTerm || '').toLowerCase()),
    );
    setFilterList(resultado);
  }, [debouncedSearchTerm, movie]);

  React.useEffect(() => {
    if (isLoading) return;

    function infiniteScroll() {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (scroll > height * 0.75) {
        setPage((prev) => prev + 1);
      }
    }
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [isLoading]);

  React.useEffect(() => {
    if (isLoading) return;

    setIsLoading(true);
    const getMovie = async () => {
      try {
        const data = await fetchMovies(page);
        setMovie((prev) => {
          const ids = new Set(prev.map((m) => m.id));
          const newMovies = data.results.filter((m) => !ids.has(m.id));
          return [...prev, ...newMovies];
        });
      } catch (error) {
        console.error('Erro ao carregar os filmes', error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [page]);

  return (
    <>
      {isLoading ? (
        <div className={styles.movieLoading}>
          <OrbitProgress color="#fff" size="medium" />
        </div>
      ) : (
        <section className={styles.movieList}>
          <MovieCard movie={filterList} />
          <div className={styles.buttonContainer}>
            <button className={styles.movieButton}>Anterior</button>
            <button className={styles.movieButton}>Próximo</button>
          </div>
        </section>
      )}
    </>
  );
};

export default MovieList;
