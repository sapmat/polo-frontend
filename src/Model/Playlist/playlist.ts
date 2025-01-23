export interface Playlist {
  id: string;
  name: string;
  image: string;
  songs: string[];
  duration: number;
  createdBy: string;
  isPinned: boolean;
  isPrivate: boolean;
}
