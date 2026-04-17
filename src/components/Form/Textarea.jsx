import React from 'react';

const Textarea = ({ ...register }) => {
  return (
    <>
      <textarea
        name="text-area"
        id="text-area"
        rows="10"
        cols="30"
        placeholder="Me fale um pouco sobre seu projeto"
        {...register}
      ></textarea>
    </>
  );
};

export default Textarea;
