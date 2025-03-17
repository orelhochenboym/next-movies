import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { FindAllMoviesDto, FindOneMovieDto } from '@next-movies/types';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(): FindAllMoviesDto {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): FindOneMovieDto {
    return this.moviesService.findOne(id);
  }
}
