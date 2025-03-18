import { useMemo } from 'react';
import Fuse from 'fuse.js';
import { useFindAllMoviesQuery } from '../store/services/api';
import { useAppSelector } from '../store/store';
import { MovieType } from '@next-movies/types';
import { filterMovies } from '../utils/filter-movies.util';

export const useGetSearchedMovies = (): MovieType[] => {
  const { data: movies = [] } = useFindAllMoviesQuery();
  const searchValue = useAppSelector((state) => state.movieSearch.value);
  const filters = useAppSelector((state) => state.filters);

  const filteredMovies = useMemo(
    () => filterMovies(movies, filters),
    [movies, filters]
  );

  const searchedMovies = useMemo(() => {
    if (!searchValue.trim()) return filteredMovies;

    const fuse = new Fuse(filteredMovies, { keys: ['title'] });
    return fuse.search(searchValue).map((result) => result.item);
  }, [filteredMovies, searchValue]);

  return searchedMovies;
};
