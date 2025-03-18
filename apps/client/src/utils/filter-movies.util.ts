import { MovieType } from '@next-movies/types';
import { FiltersState } from '../store/slices/filters.slice';

export const filterMovies = (
  movies: MovieType[],
  filters: FiltersState
): MovieType[] => {
  return movies.filter((movie) => {
    const typeResult = movie.type === filters.type || filters.type === 'both';

    const hoursMatch = movie.runtime.match(/(\d+)h/);
    const minutesMatch = movie.runtime.match(/(\d+)m/);
    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    return (
      movie.rating >= filters.rating &&
      movie.released >= filters.releaseDate &&
      typeResult &&
      hours * 60 + minutes >= filters.runtime
    );
  });
};
