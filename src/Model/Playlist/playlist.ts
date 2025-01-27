export interface PlaylistSong {
  songId: string;
  dateAdded: Date;
}

export interface Playlist {
  id: string;
  name: string;
  image: string;
  songs: PlaylistSong[];
  duration: number;
  createdBy: string;
  isPinned: boolean;
  isPrivate: boolean;
}
