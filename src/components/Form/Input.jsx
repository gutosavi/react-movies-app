import React from 'react';
import { useFormContext } from 'react-hook-form';

const Input = ({ name, placeholder, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input placeholder={placeholder} {...register(name, validation)} />
      {errors[name] && (
        <span className="error-msg">{errors[name].message}</span>
      )}
    </>
  );
};

export default Input;
