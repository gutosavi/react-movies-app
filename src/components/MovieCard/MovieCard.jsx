import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import MovieAverage from '../MovieAverage/MovieAverage';

const MovieCard = ({ movies }) => {
  return (
    <>
      <ul className="movie-container">
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <section className="movie-card">
                <div className="movie-poster">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                </div>
                <div className="movie-info">
                  <p className="movie-title">{movie.title}</p>
                  <p>
                    <MovieAverage rating={movie.vote_average} />
                  </p>
                  <div className="hidden-content">
                    <p className="description">{movie.overview}</p>
                    <Link to={`/movie/${movie.id}`} state={{ movie: movie }}>
                      <button className="btn-veja-mais">Veja mais</button>
                    </Link>
                  </div>
                </div>
              </section>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieCard;
