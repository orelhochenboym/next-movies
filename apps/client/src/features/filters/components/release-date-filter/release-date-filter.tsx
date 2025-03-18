import { setFilters } from '../../../../store/slices/filters.slice';
import { Input } from '../../../../components/input';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

export const ReleaseDateFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  return (
    <>
      <div className="flex w-fit items-center justify-start gap-4 text-nowrap">
        Release Date (Years):
      </div>
      <Input
        value={filters.releaseDate}
        className="border border-black"
        type="number"
        onChange={(e) => {
          dispatch(
            setFilters({
              releaseDate: e.target.value !== '' ? parseInt(e.target.value) : 0,
            })
          );
        }}
      />
    </>
  );
};
