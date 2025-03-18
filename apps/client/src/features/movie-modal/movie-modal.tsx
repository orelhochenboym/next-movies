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
      <DialogContent className="flex gap-10">
        <img src={movie.largeimage} alt={movie.title} />

        <div className="flex h-full w-full flex-col items-start justify-between">
          <div className="flex h-full w-full flex-col gap-4">
            <DialogHeader>
              <DialogTitle>{movie.title}</DialogTitle>
            </DialogHeader>
            <p className="text-2xl">{movie.runtime.replace('h', 'h ')}</p>
            <Rating rating={movie.rating} ranged />
            <DialogDescription>{parse(movie.synopsis)}</DialogDescription>
          </div>

          <DialogClose>
            <Button className="h-11 w-64">
              <img src={arrowLeft} alt="Left Arrow" />
              Back to list
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
