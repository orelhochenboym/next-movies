import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FindAllMoviesDto, FindOneMovieDto } from '@next-movies/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    findAllMovies: builder.query<FindAllMoviesDto, void>({
      query: () => 'movies',
    }),
    findOneMovie: builder.query<FindOneMovieDto, number>({
      query: (id) => `movies/${id}`,
    }),
  }),
});

export const { useFindAllMoviesQuery, useFindOneMovieQuery } = api;
