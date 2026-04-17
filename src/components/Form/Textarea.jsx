import React from 'react';
import { useFormContext } from 'react-hook-form';

const Textarea = ({ name }) => {
  const { register } = useFormContext();

  return (
    <>
      <textarea
        // id="text-area"
        rows="10"
        cols="30"
        placeholder="Me fale um pouco sobre seu projeto"
        {...register(name)}
      ></textarea>
    </>
  );
};

export default Textarea;
