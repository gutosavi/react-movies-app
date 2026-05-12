import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputTypes } from '../../types';

const Input = ({ name, placeholder, validation }: InputTypes) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input placeholder={placeholder} {...register(name, validation)} />
      {errors[name] && (
        <span className="error-msg">{errors[name]?.message?.toString()}</span>
      )}
    </>
  );
};

export default Input;
