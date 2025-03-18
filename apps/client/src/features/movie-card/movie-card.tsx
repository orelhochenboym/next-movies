import { FindAllMoviesDto } from '@next-movies/types';
import { Header } from './header';
import { Rating } from './rating';
import { MovieModal } from '../../features/movie-modal';

type Props = { movie: FindAllMoviesDto[number] };

export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-3 self-start">
      <Header
        image={movie.image}
        released={movie.released}
        title={movie.title}
      />
      <div className="flex h-fit w-full flex-col gap-3">
        <Rating rating={movie.rating} />

        <MovieModal movie={movie} />
      </div>
    </div>
  );
};
