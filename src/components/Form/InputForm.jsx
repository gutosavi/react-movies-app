import React from 'react';

const InputForm = ({ type, placeholder, ...register }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} {...register} />
    </>
  );
};

export default InputForm;
