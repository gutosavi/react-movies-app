import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputName = ({ name, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        placeholder={placeholder}
        {...register(name, {
          required: 'Nome é obrigatório',
          pattern: {
            value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
            message: 'Nome é inválido',
          },
        })}
      />
      {errors[name] && <span className="error-msg">{errors.name.message}</span>}
    </>
  );
};

export default InputName;
