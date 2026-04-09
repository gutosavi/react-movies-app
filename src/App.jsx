import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

function App() {
  const [movies, setMovies] = React.useState([]);

  return (
    <>
      <Header />
      <MovieList movies={movies} setMovies={setMovies} />
    </>
  );
}

export default App;
