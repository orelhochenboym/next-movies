import { useEffect, useState } from 'react';
import { Input } from '../../../../components/input';
import { useAppDispatch } from '../../../../store/store';
import { setValue } from '../../../../store/slices/movie-search.slice';

export const MovieSearch: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setValue(search));
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <Input
      className="animate-in slide-in-from-right-full border duration-700 ease-out xl:w-1/4"
      placeholder="Search title"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
