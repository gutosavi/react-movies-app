export const fetchMovies = async () => {
  const url = 'https://api.themoviedb.org/3/discover/movie';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
  return (await response).json();
};

export const fetchMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
  const data = await response.json();
  return data;
};
