import { FindAllMoviesDto } from '@next-movies/types';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import { Button } from '../../components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '../../components/dialog';
import { MovieImage } from './components/movie-image';
import { MovieInfo } from './components/movie-info';

type Props = { movie: FindAllMoviesDto[number] };

export const MovieModal: React.FC<Props> = ({ movie }) => {
  return (
    <Dialog>
      <DialogTrigger tabIndex={-1} className="h-fit w-full" asChild>
        <Button className="w-full" tabIndex={1}>
          Read more
          <img src={arrowRight} alt="Right Arrow" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col md:items-center md:justify-center md:gap-10 lg:flex-row">
        <MovieImage largeimage={movie.largeimage} title={movie.title} />

        <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-y-auto p-1 md:justify-between">
          <MovieInfo
            title={movie.title}
            synopsis={movie.synopsis}
            rating={movie.rating}
            runtime={movie.runtime}
          />

          <DialogClose className="h-11 w-full">
            <img src={arrowLeft} alt="Left Arrow" />
            Back to list
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
