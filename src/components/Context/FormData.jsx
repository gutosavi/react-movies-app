import React from 'react';
import './FormData.css';
import { useForm, FormProvider } from 'react-hook-form';
import InputForm from '../Form/InputForm';
import Textarea from '../Form/Textarea';
import { fetchPostApi } from '../../services/apiPost';

const FormData = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const methods = useForm();

  const onSubmit = async (data) => {
    try {
      const dataForm = await fetchPostApi(data);
      console.log('Dados enviados:', dataForm);
      methods.reset();
    } catch (error) {
      console.error('Erro ao enviar dados', error);
    } finally {
      setIsLoading(false);
    }
    console.log(data);
  };

  if (isLoading) return <div>Enviando...</div>;

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
