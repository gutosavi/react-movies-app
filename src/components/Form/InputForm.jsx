import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputForm = ({ name, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
      {errors[name] && <span className="error-msg">Campo obrigatório</span>}
    </>
  );
};

export default InputForm;
