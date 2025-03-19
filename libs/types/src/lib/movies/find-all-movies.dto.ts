import { createZodDto } from 'nestjs-zod';
import { movieSchema } from './movie.schema';

export class FindAllMoviesDto extends createZodDto(movieSchema.array()) {}
