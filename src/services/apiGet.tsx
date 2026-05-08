import { CustomHeaders } from '../types';
import { MovieResponse } from '../types';
import { isMovie } from '../types';

export const fetchMovies = async (page: number) => {
  const url: string = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`,
    } as CustomHeaders,
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
  const json: MovieResponse = await response.json();
  if (!isMovie(json)) {
    throw new Error('Formato inválido');
  }
  return json as MovieResponse; 
};

export const fetchMovieById = async (id: number) => {
  const url: string = `https://api.themoviedb.org/3/movie/${id}`;
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    } as CustomHeaders,
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
  const json: MovieResponse = await response.json();
  if (!isMovie(json)) {
    throw new Error('Formato inválido');
  }
  return json as MovieResponse;
};
