import { Module } from '@nestjs/common';
import { MoviesModule } from '../modules/movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
