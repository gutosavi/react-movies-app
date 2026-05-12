import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Contact from './components/Contact/Contact';
import OnDisplay from './components/OnDisplay/OnDisplay';
import { Movie } from './types.ts';

function App() {
  const [movie, setMovie] = React.useState<Movie[]>([]);
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
                movie={movie}
                setMovie={setMovie}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ondisplay" element={<OnDisplay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
