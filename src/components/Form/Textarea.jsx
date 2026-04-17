import React from 'react';

const Textarea = ({ value }) => {
  return (
    <>
      <textarea
        name="text-area"
        id="text-area"
        rows="10"
        cols="30"
        placeholder="Me fale um pouco sobre seu projeto"
        value={value}
      ></textarea>
    </>
  );
};

export default Textarea;
