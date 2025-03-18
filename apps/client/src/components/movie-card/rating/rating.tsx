import { FindAllMoviesDto } from '@next-movies/types';
import star from '../../../assets/star.svg';

type Props = Pick<FindAllMoviesDto[number], 'rating'>;

export const Rating: React.FC<Props> = ({ rating }) => {
  return (
    <div className="flex gap-2">
      <img src={star} alt="Star Icon" className="aspect-square w-6 md:w-7" />
      <p className="text-xl md:text-2xl">{rating}</p>
    </div>
  );
};
