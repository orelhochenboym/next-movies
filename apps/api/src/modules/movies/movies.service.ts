import { Injectable, Logger } from '@nestjs/common';
import { FindAllMoviesDto, movieSchema } from '@next-movies/types';
import movies from '../../assets/movies.json';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);

  findAll(): FindAllMoviesDto {
    this.logger.log('findAll() executed successfully');
    return movieSchema.array().parse(movies);
  }
}
