import { MovieCard } from '../movie-card';
import { useGetSearchedMovies } from '../../hooks/use-get-searched-movies.hook';

export const Movies: React.FC = () => {
  const movies = useGetSearchedMovies();

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-20 px-4 md:grid-cols-3 md:px-12 xl:grid-cols-6 xl:px-36">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
