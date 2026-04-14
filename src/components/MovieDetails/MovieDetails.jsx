import React from 'react';
import './MovieDetails.css';
import { useParams, useLocation } from 'react-router-dom';
import MovieAverage from '../MovieAverage/MovieAverage';

const MovieDetails = () => {
  const params = useParams();
  console.log('Movie ID:', params.id);
  const location = useLocation();
  const { movie } = location.state;
  console.log('Movie: ', movie);

  return (
    <div className="movie-details">
      <div className="movie-img">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info-movie">
        <h2>{movie.title}</h2>
        <p>
          <MovieAverage className="movie-average" rating={movie.vote_average} />
        </p>
        <p className="movie-description">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
