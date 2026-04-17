import React from 'react';
import './FormData.css';
import { useForm, FormProvider } from 'react-hook-form';
import InputForm from '../Form/InputForm';
import Textarea from '../Form/Textarea';

const FormData = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputForm name="name" placeholder="Nome completo" />
        <InputForm name="email" placeholder="Endereço de e-mail" />
        <Textarea name="message" />
        <button className="btn-submit" type="submit">
          Enviar
        </button>
      </form>
    </FormProvider>
  );
};

export default FormData;
