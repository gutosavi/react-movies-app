import React from 'react';
import './InputSearch.css';
import { CiSearch } from 'react-icons/ci';
import { isFilter } from '../../types'
 
const InputSearch = ({ setFilter }: isFilter) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target !== null){
      const target = event.target;
      setFilter(target.value);
    }
  };

  const handleBlur = () => {
    setFilter('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <div className="input-icon">
        <CiSearch style={{ color: '#ccc', fontSize: '1.3rem' }} />
      </div>
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

export default InputSearch;
