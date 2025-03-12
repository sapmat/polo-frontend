/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import SongService from '../../api/songs';
import { Song } from '../../Model/Song/songs';
import { RightTabOption } from '../../Util/Enums/RightTabOption';
import useSong from '../../Util/LocalStorage/useSong';
import BottomSongDetails from './Components/BottomSongDetails/BottomSongDetails';
import Extra from './Components/Extra/Extra';
import Player from './Components/Player/Player';
import classes from './style';

interface BottomBarProps {
  rightTab: RightTabOption;
  setRightTab: (d: RightTabOption) => void;
}

const BottomBar = ({ rightTab, setRightTab }: BottomBarProps) => {
  const { currentSongId } = useSong();
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);
  const audioRef = useRef<HTMLAudioElement>(null);

  const fetchSong = useCallback(
    (songId: string) => {
      if (!songId) return;

      SongService.getSongById(songId)
        .then((res) => {
          setCurrentSong(res);
        })
        .catch((error) => {
          console.error('Error fetching song:', error);
        });
    },
    [setCurrentSong],
  );

  useEffect(() => {
    fetchSong(currentSongId || '');
  }, [currentSongId, fetchSong]);

  return (
    <div css={classes.root}>
      <div css={classes.section}>
        <BottomSongDetails song={currentSong} />
      </div>

      <div css={[classes.section]}>
        <Player song={currentSong} audioRef={audioRef} />
      </div>

      <div css={classes.section}>
        <Extra audioRef={audioRef} rightTab={rightTab} setRightTab={setRightTab} />
      </div>
    </div>
  );
};

export default BottomBar;
