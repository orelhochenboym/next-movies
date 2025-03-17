import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { movieSchema } from '@next-movies/types';
import movies from '../../assets/movies.json';
import { MovieNotFoundException } from '../../common/exceptions/movie-not-found.exception';
import { InvalidMovieEntityException } from '../../common/exceptions/invalid-movie-entity.exception';
import { z } from 'zod';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get(MoviesService);
  });

  describe('findAll', () => {
    it('should return an array of movies', () => {
      const result = service.findAll();

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(movies.length);
    });

    it('should throw InvalidMovieEntityException', () => {
      const mockArraySchema = movieSchema.array();

      jest.spyOn(movieSchema, 'array').mockReturnValueOnce(
        Object.assign(mockArraySchema, {
          safeParse: () => ({
            success: false,
            error: new z.ZodError([
              {
                code: z.ZodIssueCode.custom,
                message: 'Invalid movie entity',
                path: [],
              },
            ]),
          }),
        })
      );

      expect(() => service.findAll()).toThrow(InvalidMovieEntityException);
    });
  });

  describe('findOne', () => {
    it('should return a movie', () => {
      const movie = service.findAll()[0];
      const result = service.findOne(movie.id);

      expect(result).toStrictEqual(movie);
    });

    it('should throw MovieNotFoundException', () => {
      expect(() => service.findOne(1)).toThrow(MovieNotFoundException);
    });

    it('should throw InvalidMovieEntityException if the movie data is invalid', () => {
      jest.spyOn(movieSchema, 'safeParse').mockReturnValueOnce({
        success: false,
        error: new z.ZodError([
          {
            code: z.ZodIssueCode.custom,
            message: 'Invalid movie data',
            path: [],
          },
        ]),
      });
      const movie = service.findAll()[0];

      expect(() => service.findOne(movie.id)).toThrow(
        InvalidMovieEntityException
      );
    });
  });
});
