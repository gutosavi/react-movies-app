import React from 'react';
import './Input.css';
import { CiSearch } from 'react-icons/ci';

const Input = ({ movies }) => {
  const [inputValue, setInputValue] = React.useState(null);
  //.title
  console.log(movies);

  const filterMovie = movies.filter((movie) =>
    movie.title.includes(inputValue),
  );

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <CiSearch style={{ color: '#ccc' }} />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search movies..."
        />
      </form>
    </>
  );
};

export default Input;
