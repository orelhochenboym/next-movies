import { createZodDto } from 'nestjs-zod';
import { movieSchema } from './movie.schema';

export class FindOneMovieDto extends createZodDto(movieSchema) {}
