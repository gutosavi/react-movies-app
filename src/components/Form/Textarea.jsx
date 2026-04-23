import React from 'react';
import { useFormContext } from 'react-hook-form';

const Textarea = ({ name }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const maxChar = 200;
  const currentContent = watch(name, '');
  const charCount = currentContent.length;

  return (
    <>
      <textarea
        id={name}
        rows="10"
        cols="30"
        placeholder="Me fale um pouco sobre seu projeto"
        maxLength={maxChar}
        {...register(name, {
          required: false,
          maxLength: {
            value: maxChar,
            message: `O limite é de ${maxChar} caracteres`,
          },
        })}
      ></textarea>
      <div
        style={{
          paddingTop: '5px',
          fontSize: '.675rem',
          color: charCount >= maxChar ? 'red' : '#555',
        }}
      >
        {charCount} / {maxChar}
      </div>
      {errors[name] && (
        <span className="error-msg">{errors[name].message}</span>
      )}
    </>
  );
};

export default Textarea;
