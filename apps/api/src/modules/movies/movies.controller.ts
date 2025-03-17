import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { FindAllMoviesDto } from '@next-movies/types';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  findAll(): FindAllMoviesDto {
    return this.MoviesService.findAll();
  }
}
