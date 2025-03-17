import { Injectable, Logger } from '@nestjs/common';
import movies from '../../assets/movies.json';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);

  findAll() {
    return movies;
  }
}
