import { MovieSearch } from './components/movie-search';
import { Filters } from '../filters';
import logo1x from '../../assets/logo1x.png';

export const Header: React.FC = () => {
  return (
    <div className="flex h-fit w-full items-center justify-between gap-8 bg-white p-4 py-4 md:px-16 lg:px-24">
      <img
        src={logo1x}
        alt="Next Movies 1x Logo"
        className="animate-in slide-in-from-left-full w-1/3 duration-700 ease-out xl:w-48"
      />
      <div className="flex w-full items-center justify-center gap-2 md:justify-end">
        <MovieSearch />
        <Filters />
      </div>
    </div>
  );
};
