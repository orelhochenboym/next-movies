import { FindAllMoviesDto } from '@next-movies/types';

type Props = Pick<FindAllMoviesDto[number], 'title' | 'largeimage'>;

export const MovieImage: React.FC<Props> = ({ title, largeimage }) => {
  return (
    <div className="flex h-full max-h-[50%] w-full items-center justify-center md:max-w-[50%] lg:max-h-full">
      <img src={largeimage} alt={title} className="h-full" />
    </div>
  );
};
