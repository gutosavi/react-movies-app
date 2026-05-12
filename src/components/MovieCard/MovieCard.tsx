import React from 'react';
import styles from './MovieCard.module.css'
import { Link } from 'react-router-dom';
import MovieAverage from '../MovieAverage/MovieAverage';
import { Movie } from '../../types';

type MovieCardProps = {
  movie: Array<Movie>;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  if (!movie) return null;
  return (
    <>
      <ul className={styles.movieContainer}>
        {movie &&
          movie.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`} state={{ movie: movie }}>
                <section className={styles.movieCard}>
                  <div className={styles.moviePoster}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    />
                  </div>
                  <div className={styles.movieInfo}>
                    <p className={styles.movieTitle}>{movie.title}</p>
                    <p>
                      <MovieAverage rating={movie.vote_average} />
                    </p>
                    <div className={styles.hiddenContent}>
                      <p className={styles.description}>{movie.overview}</p>
                    </div>
                  </div>
                </section>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieCard;
