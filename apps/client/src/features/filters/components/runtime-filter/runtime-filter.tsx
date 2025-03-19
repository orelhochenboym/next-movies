import { setFilters } from '../../../../store/slices/filters.slice';
import { Input } from '../../../../components/input';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

export const RuntimeFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  return (
    <>
      <div className="flex w-fit items-center justify-start gap-4 text-nowrap">
        Runtime (in minutes)
      </div>
      <Input
        value={filters.runtime}
        type="number"
        id="runtime-input"
        min="0"
        className="border border-black"
        aria-label="Runtime in minutes"
        onChange={(e) => {
          dispatch(
            setFilters({
              runtime: e.target.value !== '' ? parseInt(e.target.value, 10) : 0,
            })
          );
        }}
      />
    </>
  );
};
