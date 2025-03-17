import { UnprocessableEntityException } from '@nestjs/common';

export class InvalidMovieEntityException extends UnprocessableEntityException {
  constructor() {
    super(`The JSON data in our server is invalid. Please contact support.`);
  }
}
