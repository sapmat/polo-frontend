import { Playlist } from "../../Model/Playlist/playlist";
import { PlayedSongListCell } from "../ArrayList/SongsList";

export const initPlayList = (
  playlist: Playlist,
  songPlacement: number
): PlayedSongListCell[] => {
  const splitList: string[] = [
    "",
    ...playlist.songs.slice(songPlacement),
    ...playlist.songs.slice(0, songPlacement),
    playlist.songs[0],
  ];
  const list: PlayedSongListCell[] = [];

  for (let i = 1; i < splitList.length - 1; i++) {
    list.push({
      prev: splitList[i - 1],
      current: splitList[i],
      next: splitList[i + 1],
    });
  }

  return list;
};