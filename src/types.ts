export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string | null;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

export interface UserResponse {
  name: string;
  email: string;
  message: string;
  id: number;
}

export function isMovieResponse (data: unknown): data is MovieResponse {
  if(!data || typeof data !== 'object') {
    return false;
  }
  const movieData = data as Record<string, unknown>;

  return (
    typeof movieData.page === 'number' && 
    Array.isArray(movieData.results)
  )
}

export function isMovie(data: unknown): data is Movie {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const movie = data as Record<string, unknown>;

  return (
    typeof movie.id === 'number' &&
    typeof movie.title === 'string' &&
    typeof movie.vote_average === 'number' &&
    typeof movie.overview === 'string' &&
    typeof movie.poster_path === 'string'
  );
}

export type CustomHeaders = Record<string, string> & {
  Accept: string;
  Authorization: string;
}

export interface isFilter {
  setFilter: (filter: string) => void;
}

export interface InputTypes {
  name: string;
  placeholder: string;
  validation: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    }
  }
}
