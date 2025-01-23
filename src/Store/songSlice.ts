import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../Model/Song/songs";
import { Playlist } from "../Model/Playlist/playlist";

interface SongSlice {
  queue: Song[];
  playlist: Playlist | null;
  playedList: Song[];
  prev: Song | null;
  song: Song | null;
  next: Song | null;
  isPLaying: boolean;
}

const initialState: SongSlice = {
  queue: [],
  playlist: null,
  playedList: [],
  prev: null,
  song: null,
  next: null,
  isPLaying: false,
};

const songSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    changeCurrent: (
      state,
      actions: PayloadAction<{ playlist: Playlist; song: Song }>
    ) => {
      state.queue = [];
      playlist;
    },
    nextSong: (state) => {},
    prevSong: (state) => {},
  },
});

export const { changeCurrent, nextSong, prevSong } = songSlice.actions;

export default songSlice.reducer;

/*

*/
