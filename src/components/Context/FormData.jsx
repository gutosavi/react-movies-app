import React from 'react';
import './FormData.css';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../Form/Input';
import Textarea from '../Form/Textarea';
import { fetchPostApi } from '../../services/apiPost';
import { OrbitProgress } from 'react-loading-indicators';

const FormData = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const methods = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
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

  return (
    <>
      {isLoading ? (
        <p className="form-loading">
          <OrbitProgress size="small" color="#ccc" />
        </p>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              name="name"
              placeholder="Nome completo"
              validation={{
                required: 'Nome é obrigatório',
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
                  message: 'Nome é inválido',
                },
              }}
            />
            <Input
              name="email"
              placeholder="Endereço de e-mail"
              validation={{
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: 'E-mail inválido',
                },
              }}
            />
            <Textarea name="message" />
            <button className="btn-submit" type="submit">
              Enviar
            </button>
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default FormData;
