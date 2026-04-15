import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [movies, setMovies] = React.useState([]);

  return (
    <>
      <BrowserRouter>
        <Header movies={movies} />
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={movies} setMovies={setMovies} />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
