import React from 'react';
import './FormData.css';
import { useForm, FormProvider } from 'react-hook-form';
import InputForm from '../Form/InputForm';
import Textarea from '../Form/Textarea';

const FormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          type="text"
          placeholder="Nome completo"
          {...register('name', { required: true })}
        />
        {errors.name && <span className="error-msg">Nome é obrigatório</span>}
        <InputForm
          type="mail"
          placeholder="Endereço de e-mail"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className="error-msg">E-mail é obrigatório</span>
        )}
        <Textarea {...register('message')} />
        <button className="btn-submit" type="submit">
          Enviar
        </button>
      </form>
    </FormProvider>
  );
};

export default FormData;
