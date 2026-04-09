import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movies }) => {
  return (
    <>
      <ul className="movie-card">
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <div className="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </div>
              <div className="movie-info">
                <p className="movie-title">{movie.title}</p>
                <p>{movie.vote_average}</p>
                <p className="description">{movie.overview}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieCard;
