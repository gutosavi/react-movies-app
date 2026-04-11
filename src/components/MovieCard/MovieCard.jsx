import React from 'react';
import './MovieCard.css';

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
                  <p>{movie.vote_average}</p>
                  <div className="hidden-content">
                    <p className="description">{movie.overview}</p>
                    <button className="btn-veja-mais">Veja mais</button>
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
