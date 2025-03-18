import { FindAllMoviesDto } from '@next-movies/types';
import { decodeHtml } from '../../utils/decode-html.util';
import star from '../../assets/star.svg';
import arrow from '../../assets/arrow.svg';
import { Button } from '../button';

type Props = { movie: FindAllMoviesDto[number] };

export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-3 self-start">
      <div className="flex flex-col gap-4 ">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-56 w-36 self-center md:h-96 md:w-64"
        />

        <h1 className="font-[Georgia] text-xl md:text-3xl">
          {decodeHtml(movie.title)} ({movie.released})
        </h1>
      </div>

      <div className="flex h-fit w-full flex-col gap-3">
        <div className="flex gap-2">
          <img
            src={star}
            alt="Star Icon"
            className="aspect-square w-6 md:w-7"
          />
          <p className="text-xl md:text-2xl">{movie.rating}</p>
        </div>

        <Button>
          Read more
          <img src={arrow} alt="Right Arrow" />
        </Button>
      </div>
    </div>
  );
};
