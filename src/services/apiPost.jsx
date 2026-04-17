export const fetchPostApi = async (data) => {
  try {
    const response = await ('https://typicode.com',
    {
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
  } catch (error) {
    console.error('Erro', error);
  }
};
