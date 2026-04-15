import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const filterMovie = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <>
      <BrowserRouter>
        <Header setFilter={setInputValue} />
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={filterMovie} setMovies={setMovies} />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
