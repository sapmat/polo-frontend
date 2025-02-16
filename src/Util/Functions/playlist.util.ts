import { Playlist } from "../../Model/Playlist/playlist";
import { Song } from "../../Model/Song/songs";

export const shufflePlaylist = (playlist: Playlist): Playlist => {
  const newPlaylist = { ...playlist, songs: [...playlist.songs] };

  for (let i = newPlaylist.songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newPlaylist.songs[i], newPlaylist.songs[j]] = [
      newPlaylist.songs[j],
      newPlaylist.songs[i],
    ];
  }

  return newPlaylist;
};

export const findPlaylistPointer = (
  playlist: Playlist,
  song: Song
): number => {
  let index = -1;

  for (let i = 0; i < playlist.songs.length; i++) {
    if (playlist.songs[i].songId === song.id) {
      index = i;
      break;
    }
  }

  return index;
};
