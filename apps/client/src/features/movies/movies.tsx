import { MovieCard } from '../../components/movie-card';
import { useFindAllMoviesQuery } from '../../store/services/api';

export const Movies: React.FC = () => {
  const { data: movies } = useFindAllMoviesQuery();
  return (
    <div className="grid grid-cols-6 items-center justify-center gap-4 px-36">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
