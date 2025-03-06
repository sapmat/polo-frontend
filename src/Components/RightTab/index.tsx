/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import PlaylistService from '../../api/playlists';
import SongService from '../../api/songs';
import { Playlist } from '../../Model/Playlist/playlist';
import { Song } from '../../Model/Song/songs';
import usePlaylist from '../../Util/LocalStorage/usePlaylist';
import useQueue from '../../Util/LocalStorage/useQueue';
import useSong from '../../Util/LocalStorage/useSong';
import CurrentSong from './Components/CurrentSong/CurrentSong';
import classes from './style';

const RightTab = () => {
  const { currentSongId } = useSong();
  const { currentPlaylist } = usePlaylist();
  const { queue } = useQueue();
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);
  const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined);

  const fetchSong = useCallback(
    (songId: string, playlistId: string) => {
      if (!songId || !playlistId) return;

      SongService.getSongById(songId)
        .then((res) => {
          setCurrentSong(res);
        })
        .catch((error) => {
          console.error('Error fetching song:', error);
        });

      PlaylistService.getPlaylist(playlistId)
        .then((res) => setPlaylist(res))
        .catch((error) => {
          console.error('Error fetching playlist:', error);
        });
    },
    [setCurrentSong],
  );

  useEffect(() => {
    fetchSong(currentSongId || '', currentPlaylist.id || '');
  }, [currentSongId, fetchSong]);

  return (
    <div css={classes.root}>
      <CurrentSong currentSong={currentSong} playlist={playlist} queue={queue} />
    </div>
  );
};

export default RightTab;
