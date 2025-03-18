import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
  type: string;
  releaseDate: number;
  rating: number;
  runtime: number;
};

const initialState: FiltersState = {
  type: 'both',
  releaseDate: 0,
  rating: 0,
  runtime: 0,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
