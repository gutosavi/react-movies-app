import React from 'react';
import './Input.css';
import { CiSearch } from 'react-icons/ci';

const Input = () => {
  return (
    <>
      <CiSearch style={{ color: '#ccc' }} />
      <form>
        <input type="text" placeholder="Search movies..." />
      </form>
    </>
  );
};

export default Input;
