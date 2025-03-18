import Fuse, { FuseResult } from 'fuse.js';
import { useFindAllMoviesQuery } from '../store/services/api';
import { useAppSelector } from '../store/store';
import { useEffect, useState } from 'react';
import { MovieType } from '@next-movies/types';

export const useGetSearchedMovies = () => {
  const { data: movies } = useFindAllMoviesQuery();
  const searchValue = useAppSelector((state) => state.movieSearch.value);
  const [filteredMovies, setFilteredMovies] = useState<FuseResult<MovieType>[]>(
    []
  );

  useEffect(() => {
    if (movies) {
      if (searchValue.trim() !== '') {
        const fuse = new Fuse(movies, { keys: ['title'] });
        setFilteredMovies(fuse.search(searchValue));
      }
    }
  }, [movies, searchValue]);

  return filteredMovies.length === 0
    ? movies
    : filteredMovies.map((movie) => ({ ...movie.item }));
};
