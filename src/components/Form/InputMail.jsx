import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputMail = ({ name, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        id={name}
        placeholder={placeholder}
        {...register('email', {
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: 'E-mail inválido',
          },
        })}
      />
      {errors[name] && (
        <span className="error-msg">{errors.email.message}</span>
      )}
    </>
  );
};

export default InputMail;
