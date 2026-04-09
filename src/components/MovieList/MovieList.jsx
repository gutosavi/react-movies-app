import React from 'react';

const MovieList = () => {
  const getMovies = () => {
    const url = 'https://api.themoviedb.org/3/discover/movie';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjhmZGQ3NTA1NjMxYjEzNjEyNThkYWYwNDMxMjljYiIsIm5iZiI6MTc3NTc1NDk3NC42MDgsInN1YiI6IjY5ZDdkZWRlNzE2YjI5MTM3NTg3YjcyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uF8FVwQrZURG_wNsR9i8zO-lI-AjFdmDjFVN9S6vBPc',
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  };

  getMovies();

  return <div>MovieList</div>;
};

export default MovieList;
