import { FindAllMoviesDto } from '@next-movies/types';
import arrow from '../../assets/arrow.svg';
import { Button } from '../button';
import { Header } from './header';
import { Rating } from './rating';

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

        <Button>
          Read more
          <img src={arrow} alt="Right Arrow" />
        </Button>
      </div>
    </div>
  );
};
