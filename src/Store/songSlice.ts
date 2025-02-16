import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SongState {
  isPlaying: boolean;
}

const initialState: SongState = {
  isPlaying: false,
};

const songSlice = createSlice({
  name: "playingSong",
  initialState,
  reducers: {
    initStore: (
      state,
      action: PayloadAction<{
        isPlaying: boolean;
      }>
    ) => {
      const { isPlaying } = action.payload;
      state.isPlaying = isPlaying;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    togglePlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { initStore, setPlaying, togglePlaying } = songSlice.actions;

export default songSlice.reducer;
