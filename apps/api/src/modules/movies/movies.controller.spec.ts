import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieNotFoundException } from '../../common/exceptions/movie-not-found.exception';

describe('MoviesController', () => {
  let controller: MoviesController;
  let service: MoviesService;

  const mockMoviesService = {
    findAll: jest.fn(() => [{ id: 1, title: 'Next Movie' }]),
    findOne: jest.fn((id) =>
      id === 1 ? { id: 1, title: 'Next Movie' } : null
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [{ provide: MoviesService, useValue: mockMoviesService }],
    }).compile();

    controller = module.get(MoviesController);
    service = module.get(MoviesService);
  });

  describe('findAll', () => {
    it('should return all movies', () => {
      expect(controller.findAll()).toEqual([{ id: 1, title: 'Next Movie' }]);
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return a movie', () => {
      expect(controller.findOne(1)).toEqual({ id: 1, title: 'Next Movie' });
      expect(service.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw MovieNotFoundException', () => {
      jest.spyOn(service, 'findOne').mockImplementation(() => {
        throw new MovieNotFoundException(0);
      });

      expect(() => controller.findOne(0)).toThrow(MovieNotFoundException);
    });
  });
});
