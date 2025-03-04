import { useEffect, useState } from 'react';
import { LocalStoragePlaylist, Playlist } from '../../Model/Playlist/playlist';
import useLoop from './useLoop';
import useSong from './useSong';

const usePlaylist = () => {
  const [currentPlaylist, setPlaylist] = useState<LocalStoragePlaylist>(() => {
    const storedPlaylist = localStorage.getItem('playlist');
    return storedPlaylist ? JSON.parse(storedPlaylist) : [];
  });

  const [playlistPointer, setPlaylistPointer] = useState<number>(() => {
    return Number(localStorage.getItem('playlistPointer')) || 0;
  });

  const { updateCurrentSongId } = useSong();
  const { isLoop } = useLoop();

  const updateState = () => {
    setPlaylist(localStorage.getItem('playlist') ? JSON.parse(localStorage.getItem('playlist')!) : null);
    setPlaylistPointer(Number(localStorage.getItem('playlistPointer')) || 0);
  };

  const setCurrentPlaylist = (newPlaylist: Playlist | LocalStoragePlaylist, playlistPointer = 0) => {
    const { id, songs } = newPlaylist;
    const filteredPlaylist: LocalStoragePlaylist = { id, songs };
    localStorage.setItem('playlist', JSON.stringify(filteredPlaylist));
    localStorage.setItem('playlistPointer', playlistPointer.toString());
    window.dispatchEvent(new Event('local-storage-playlist-changed'));
    window.dispatchEvent(new Event('local-storage-playlist-pointer-changed'));
    updateState();
  };

  const movePointer = (direction: 1 | -1) => {
    if (!currentPlaylist) return;

    const current: number = Number(localStorage.getItem('playlistPointer')) || 0;
    let next: number;

    if (isLoop) {
      next = (current + direction) % currentPlaylist.songs.length;
      if (next < 0) next += currentPlaylist.songs.length;
    } else {
      next = Math.max(0, Math.min(current + direction, currentPlaylist.songs.length - 1));
    }

    updateCurrentSongId(currentPlaylist.songs[next].songId);

    localStorage.setItem('playlistPointer', next.toString());
    window.dispatchEvent(new Event('local-storage-playlist-pointer-changed'));
    updateState();
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateState();
    };

    window.addEventListener('local-storage-playlist-changed', handleStorageChange);
    window.addEventListener('local-storage-playlist-pointer-changed', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage-playlist-changed', handleStorageChange);
      window.removeEventListener('local-storage-playlist-pointer-changed', handleStorageChange);
    };
  }, []);

  return {
    currentPlaylist,
    playlistPointer,
    setCurrentPlaylist,
    setPlaylistPointer,
    movePointer,
  };
};

export default usePlaylist;
