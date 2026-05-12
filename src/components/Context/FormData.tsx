import React from 'react';
import styles from './FormData.module.css';
import { useForm, FormProvider } from 'react-hook-form';
import { UserResponse } from '../../types.ts';
import { fetchPostApi } from '../../services/apiPost';
import Input from '../Form/Input';
import Textarea from '../Form/Textarea';
import ComponentSkeleton from '../Skeleton/ComponentSkeleton';

const FormData = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const methods = useForm<UserResponse>();

  const onSubmit = async (data: UserResponse): Promise<UserResponse | undefined> => {
    setIsLoading(true);
    try {
      const dataForm = await fetchPostApi(data);
      methods.reset();
      return dataForm;
    } catch (error) {
      console.error('Erro ao enviar dados', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.formLoading}>
          <ComponentSkeleton />
        </div>
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
            <button className={styles.btnSubmit} type="submit">
              Enviar
            </button>
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default FormData;
