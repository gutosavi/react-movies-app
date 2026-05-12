import { Movie, MovieResponse } from '../types';
import { isMovie, isMovieResponse } from '../types';

export const fetchMovies = async (page: number) => {
  const url: string = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
  const json: MovieResponse = await response.json();
  if (!isMovieResponse(json)) {
    throw new Error('Formato inválido');
  }
  return json as MovieResponse; 
};

export const fetchMovieById = async (id: number): Promise<Movie> => {
  const url: string = `https://api.themoviedb.org/3/movie/${id}`;
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
  const json: unknown = await response.json();
  if (!isMovie(json)) {
    throw new Error('Formato inválido');
  }
  return json;
};
