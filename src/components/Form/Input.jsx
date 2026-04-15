import React from 'react';
import './Input.css';
import { CiSearch } from 'react-icons/ci';

const Input = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <CiSearch style={{ color: '#ccc', fontSize: '1.5rem' }} />
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
