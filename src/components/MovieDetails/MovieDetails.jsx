import React from 'react';
import './MovieDetails.css';
import { useParams, useLocation } from 'react-router-dom';
import MovieAverage from '../MovieAverage/MovieAverage';
import { fetchMovieById } from '../../services/apiGet';
import { OrbitProgress } from 'react-loading-indicators';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = React.useState(location.state?.movie || null);
  const [isLoading, setIsLoading] = React.useState(!movie);

  React.useEffect(() => {
    if (!movie) {
      const getMovie = async () => {
        try {
          const response = await fetchMovieById(id);
          setMovie(response);
          console.log(movie);
        } catch (error) {
          console.log('Erro ao carregar detalhes dos filmes', error);
        } finally {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000); // para teste
        }
      };
      getMovie();
    }
  }, [id, movie]);

  return (
    <>
      {isLoading || !movie ? (
        <div className="movie-loading">
          <OrbitProgress color="#fff" size="medium" />
        </div>
      ) : (
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
              <MovieAverage
                className="movie-average"
                rating={movie.vote_average}
              />
            </p>
            <p className="movie-description">{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
