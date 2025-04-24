/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import PlaylistService from '../../api/playlists';
import SongService from '../../api/songs';
import { Playlist } from '../../Model/Playlist/playlist';
import { Song } from '../../Model/Song/songs';
import { RightTabOption } from '../../Util/Enums/RightTabOption';
import usePlaylist from '../../Util/LocalStorage/usePlaylist';
import useSong from '../../Util/LocalStorage/useSong';
import CurrentSong from './Components/CurrentSong/CurrentSong';
import classes from './style';

interface RightTabProps {
  display: RightTabOption;
  setRightTab: (v: RightTabOption) => void;
}

const RightTab = ({ display, setRightTab }: RightTabProps) => {
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);
  const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined);

  const { currentSongId } = useSong();
  const { currentPlaylist } = usePlaylist();

  const fetchSong = async (songId: string, playlistId: string) => {
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
  };

  useEffect(() => {
    fetchSong(currentSongId || '', currentPlaylist.id || '');
  }, [display, currentSongId]);

  const displayComponent = (): JSX.Element => {
    switch (display) {
      case RightTabOption.CURRENT_SONG:
        return (
          <CurrentSong
            currentSong={currentSong}
            playlist={playlist}
            setRightTab={setRightTab}
          />
        );

      case RightTabOption.QUEUE:
        return <>// TODO QUEUE COMPONENT</>;

      default:
        return <></>;
    }
  };

  return (
    <>{display !== RightTabOption.NONE && <div css={classes.root}>{displayComponent()}</div>}</>
  );
};

export default RightTab;
