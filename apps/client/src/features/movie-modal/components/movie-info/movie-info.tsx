import { FindAllMoviesDto } from '@next-movies/types';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../../components/dialog';
import parse from 'html-react-parser';
import { Rating } from '../../../../components/movie-card/rating';

type Props = Pick<
  FindAllMoviesDto[number],
  'title' | 'runtime' | 'rating' | 'synopsis'
>;

export const MovieInfo: React.FC<Props> = ({
  rating,
  runtime,
  synopsis,
  title,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-y-auto">
      <div className="flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-left">{title}</DialogTitle>
        </DialogHeader>

        <p className=" text-xl md:text-2xl">{runtime.replace('h', 'h ')}</p>

        <Rating rating={rating} ranged />
      </div>

      <DialogDescription>{parse(synopsis)}</DialogDescription>
    </div>
  );
};
