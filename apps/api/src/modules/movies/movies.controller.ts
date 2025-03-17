import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  findAll() {
    return this.MoviesService.findAll();
  }
}
