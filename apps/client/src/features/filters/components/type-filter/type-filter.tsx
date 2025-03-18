import { setFilters } from '../../../../store/slices/filters.slice';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/select';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

export const TypeFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  return (
    <>
      <div className="flex w-fit items-center justify-start gap-4 text-nowrap">
        Type:
      </div>
      <Select
        defaultValue={filters.type}
        onValueChange={(value) => {
          dispatch(setFilters({ type: value }));
        }}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="movie">Movie</SelectItem>
          <SelectItem value="series">Series</SelectItem>
          <SelectItem value="both">Both</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};
