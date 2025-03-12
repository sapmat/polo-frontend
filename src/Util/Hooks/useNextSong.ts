import { useEffect, useState } from 'react';
import SongService from '../../api/songs';
import { Song } from '../../Model/Song/songs';
import useLoop from '../LocalStorage/useLoop';
import usePlaylist from '../LocalStorage/usePlaylist';
import useQueue from '../LocalStorage/useQueue';

export const useNextSong = () => {
  const [nextSong, setNextSong] = useState<Song | undefined>(undefined);
  const { currentPlaylist, playlistPointer } = usePlaylist();
  const { queue, queuePointer } = useQueue();
  const { isLoop } = useLoop();

  const getNextSong = async () => {
    // next song from queue
    if (queue.length > 0 && queuePointer + 1 < queue.length) {
      const song: Song | undefined = await SongService.getSongById(queue[queuePointer + 1].id);

      if (!song) console.error('WTF?');

      setNextSong(song);
    }

    // queue ended
    else if (queue.length > 0 && queuePointer + 1 === queue.length) {
      // next song is looping back cause queue is done and no more song in playlist
      if (playlistPointer + 1 === currentPlaylist.songs.length) {
        if (isLoop) {
          const song: Song | undefined = await SongService.getSongById(
            currentPlaylist.songs[0].songId,
          );

          if (!song) console.error('WTF?');

          setNextSong(song);
          // next song is nothing cause queue is done and no more song in playlist
        } else {
          setNextSong(undefined);
        }
        // next song is from playlist once queue ended
      } else {
        const song: Song | undefined = await SongService.getSongById(
          currentPlaylist.songs[playlistPointer + 1].songId,
        );

        if (!song) console.error('WTF?');

        setNextSong(song);
      }
    }

    // next song from playlist (already in playlist)
    else if (playlistPointer + 1 < currentPlaylist.songs.length) {
      const song: Song | undefined = await SongService.getSongById(
        currentPlaylist.songs[playlistPointer + 1].songId,
      );

      if (!song) console.error('WTF?');

      setNextSong(song);
    }

    // next song is looping back cause playlist done (to start of playlist)
    else if (playlistPointer + 1 === currentPlaylist.songs.length && isLoop) {
      const song: Song | undefined = await SongService.getSongById(currentPlaylist.songs[0].songId);

      if (!song) console.error('WTF?');

      setNextSong(song);
    }

    // next song is nothing
    else {
      setNextSong(undefined);
    }
  };

  useEffect(() => {
    getNextSong();
  }, [queuePointer, playlistPointer, queue, currentPlaylist]);

  return { nextSong };
};
