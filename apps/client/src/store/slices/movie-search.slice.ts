import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MovieSearchState = { value: string };

const initialState: MovieSearchState = { value: '' };

export const movieSearchSlice = createSlice({
  name: 'movieSearch',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
