import { UserResponse } from "../types";

export const fetchPostApi = async (data: UserResponse): Promise<UserResponse | undefined> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    const result: UserResponse = await response.json();
    console.log('Dados enviados com sucesso', result);
    return result;
  } catch (error) {
    console.error('Erro', error);
    throw error;
  }
};
