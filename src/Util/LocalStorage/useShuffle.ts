import { useEffect, useState } from 'react';
import PlaylistService from '../../api/playlists';
import { Playlist } from '../../Model/Playlist/playlist';
import { shufflePlaylist } from '../Functions/playlist.util';
import usePlaylist from './usePlaylist';
import useSong from './useSong';

const useShuffle = () => {
  const [isShuffle, setIsShuffle] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('isShuffle') || 'false');
  });

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { currentSongId } = useSong();

  const switchShuffle = () => {
    const newState = !isShuffle;
    setIsShuffle(newState);
    localStorage.setItem('isShuffle', JSON.stringify(newState));

    if (currentPlaylist.id)
      PlaylistService.getPlaylist(currentPlaylist.id).then((res) => {
        if (res) {
          const newPlaylist: Playlist = newState ? shufflePlaylist(res, currentSongId) : res;
          setCurrentPlaylist(newPlaylist);
        }
      });

    window.dispatchEvent(new Event('local-storage-shuffle-changed'));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedValue = JSON.parse(localStorage.getItem('isShuffle') || 'false');
      setIsShuffle(storedValue);
    };

    window.addEventListener('local-storage-shuffle-changed', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage-shuffle-changed', handleStorageChange);
    };
  }, []);

  return { isShuffle, switchShuffle };
};

export default useShuffle;
