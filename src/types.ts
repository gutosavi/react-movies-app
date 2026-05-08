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

export function isMovie (data: unknown): data is MovieResponse {
  if(!data || typeof data !== 'object') {
    return false;
  }
  const movieData = data as Record<string, unknown>;

  return (
    typeof movieData.page === 'number' && 
    Array.isArray(movieData.results)
  )
}

export type CustomHeaders = Record<string, string> & {
  Accept: string;
  Authorization: string;
}
