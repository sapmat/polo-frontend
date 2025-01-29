import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../Model/Song/songs";

export interface SongState {
  currentSong: Song | null;
  prevSong: Song | null;
  nextSong: Song | null;
  isPlaying: boolean;
  onLoop: boolean;
  onShuffle: boolean;
}

const initialState: SongState = {
  currentSong: null,
  prevSong: null,
  nextSong: null,
  isPlaying: false,
  onLoop: false,
  onShuffle: false,
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
        onLoop: boolean;
        onShuffle: boolean;
      }>
    ) => {
      const { songs, isPlaying, onLoop, onShuffle } = action.payload;
      state.prevSong = songs[0];
      state.currentSong = songs[1];
      state.nextSong = songs[2];
      state.isPlaying = isPlaying;
      state.onLoop = onLoop;
      state.onShuffle = onShuffle;
    },
    setPrev: (state, action: PayloadAction<Song | null>) => {
      const song = action.payload;
      state.prevSong = song;
    },
    setCurrent: (state, action: PayloadAction<Song | null>) => {
      const song = action.payload;
      state.currentSong = song;
    },
    setNext: (state, action: PayloadAction<Song | null>) => {
      const song = action.payload;
      state.nextSong = song;
    },
    togglePlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    toggleLoop: (state) => {
      state.onLoop = !state.onLoop;
    },
    toggleShuffle: (state) => {
      state.onShuffle = !state.onShuffle;
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
