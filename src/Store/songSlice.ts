import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../Model/Song/songs";

export interface SongState {
  currentSong: Song | null;
  prevSong: Song | null;
  nextSong: Song | null;
  isPlaying: boolean;
  isLoop: boolean;
  isShuffle: boolean;
}

const initialState: SongState = {
  currentSong: null,
  prevSong: null,
  nextSong: null,
  isPlaying: false,
  isLoop: false,
  isShuffle: false,
};

const songSlice = createSlice({
  name: "playingSong",
  initialState,
  reducers: {
    initStore: (
      state,
      action: PayloadAction<{
        songs: (Song | null)[];
        isPlaying: boolean;
        isLoop: boolean;
        isShuffle: boolean;
      }>
    ) => {
      const { songs, isPlaying, isLoop, isShuffle } = action.payload;
      state.prevSong = songs[0];
      state.currentSong = songs[1];
      state.nextSong = songs[2];
      state.isPlaying = isPlaying;
      state.isLoop = isLoop;
      state.isShuffle = isShuffle;
    },
    setPrev: (state, action: PayloadAction<Song | null>) => {
      state.prevSong = action.payload;
    },
    setCurrent: (state, action: PayloadAction<Song | null>) => {
      state.currentSong = action.payload;
    },
    setNext: (state, action: PayloadAction<Song | null>) => {
      state.nextSong = action.payload;
    },
    togglePlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    toggleLoop: (state) => {
      state.isLoop = !state.isLoop;
    },
    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
  },
});

export const {
  initStore,
  setPrev,
  setCurrent,
  setNext,
  togglePlaying,
  toggleLoop,
  toggleShuffle,
} = songSlice.actions;

export default songSlice.reducer;
