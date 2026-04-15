import React from 'react';
import './Input.css';
import { CiSearch } from 'react-icons/ci';

const Input = ({ setFilter }) => {
  const inputRef = React.useRef(null);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleBlur = () => {
    setFilter('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <CiSearch style={{ color: '#ccc', fontSize: '1.5rem' }} />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Search movies..."
        />
      </form>
    </>
  );
};

export default Input;
