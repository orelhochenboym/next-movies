import { Injectable, Logger } from '@nestjs/common';
import { movieSchema } from '@next-movies/types';
import movies from '../../assets/movies.json';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);

  findAll() {
    for (const movie of movies) {
      movieSchema.parse(movie);
    }
    return movies;
  }
}
