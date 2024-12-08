import { Song } from "../Song/songs";

export interface Playlist {
  name: string;
  image: string;
  songs: Song[];
  createdBy: string;
  isPinned: boolean;
}
