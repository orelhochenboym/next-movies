import { createZodDto } from 'nestjs-zod';
import { movieSchema } from './movie.schema';

export class FindOneMoviesDto extends createZodDto(movieSchema) {}
