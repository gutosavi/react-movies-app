export const fetchPostApi = async (data) => {
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
    const result = await response.json();
    console.log('Dados enviados com sucesso', result);
    return result;
  } catch (error) {
    console.error('Erro', error);
    throw error;
  }
};
