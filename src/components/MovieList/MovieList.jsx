import React from 'react';

const MovieList = () => {
  const [movies, setMovies] = React.useState([]);

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
      .then((json) => setMovies(json.results))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
