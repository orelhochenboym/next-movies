import { Injectable, Logger } from '@nestjs/common';
import {
  FindAllMoviesDto,
  FindOneMovieDto,
  movieSchema,
} from '@next-movies/types';
import movies from '../../assets/movies.json';
import { MovieNotFoundException } from '../../common/exceptions/movie-not-found.exception';
import { InvalidMovieEntityException } from '../../common/exceptions/invalid-movie-entity.exception';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);

  findAll(): FindAllMoviesDto {
    this.logger.log('findAll() executed successfully');

    const result = movieSchema.array().safeParse(movies);

    if (!result.success) {
      throw new InvalidMovieEntityException();
    }

    return result.data;
  }

  findOne(id: number): FindOneMovieDto {
    const foundMovie = this.findAll().find((movie) => movie.id === id);

    if (!foundMovie) {
      throw new MovieNotFoundException(id);
    }

    const result = movieSchema.safeParse(foundMovie);

    if (!result.success) {
      throw new InvalidMovieEntityException();
    }

    this.logger.log(`findOne(${id}) executed successfully`);
    return result.data;
  }
}
