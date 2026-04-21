import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Contact from './components/Contact/Contact';
import OnDisplay from './components/OnDisplay/OnDisplay';
// import useDebounce from './hooks/useDebounce';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <BrowserRouter>
        <Header setFilter={setInputValue} />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                inputValue={inputValue}
                movies={movies}
                setMovies={setMovies}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ondisplay" element={<OnDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
