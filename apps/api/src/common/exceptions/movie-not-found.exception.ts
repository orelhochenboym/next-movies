import { NotFoundException } from '@nestjs/common';

export class MovieNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`Movie with id: ${id} not found in the database.`);
  }
}
