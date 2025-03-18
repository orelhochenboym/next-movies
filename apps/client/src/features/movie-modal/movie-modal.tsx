import { FindAllMoviesDto } from '@next-movies/types';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import { Button } from '../../components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/dialog';
import parse from 'html-react-parser';
import { Rating } from '../../components/movie-card/rating';

type Props = { movie: FindAllMoviesDto[number] };

export const MovieModal: React.FC<Props> = ({ movie }) => {
  return (
    <Dialog>
      <DialogTrigger tabIndex={-1} className="h-fit w-full">
        <Button className="w-full">
          Read more
          <img src={arrowRight} alt="Right Arrow" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col md:items-center md:justify-center md:gap-10 lg:flex-row">
        <div className="flex h-full max-h-[50%] w-full items-center justify-center md:max-w-[50%] lg:max-h-full">
          <img src={movie.largeimage} alt={movie.title} className="h-full" />
        </div>

        <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-y-auto md:justify-between">
          <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-y-auto">
            <div className="flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-left">{movie.title}</DialogTitle>
              </DialogHeader>
              <p className=" text-xl md:text-2xl">
                {movie.runtime.replace('h', 'h ')}
              </p>
              <Rating rating={movie.rating} ranged />
            </div>
            <DialogDescription>{parse(movie.synopsis)}</DialogDescription>
          </div>

          <DialogClose>
            <Button className="h-11 w-full">
              <img src={arrowLeft} alt="Left Arrow" />
              Back to list
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
