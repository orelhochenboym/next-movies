import { setFilters } from '../../../../store/slices/filters.slice';
import { Slider } from '../../../../components/slider';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

export const RatingFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  return (
    <>
      <div className="flex w-full items-center justify-start gap-4 text-nowrap">
        Rating ({filters.rating})
      </div>
      <Slider
        className="w-full"
        value={[filters.rating]}
        max={10}
        step={0.1}
        onValueChange={([rating]) => {
          dispatch(setFilters({ rating }));
        }}
      />
    </>
  );
};
