/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Playlist } from '../../../../Model/Playlist/playlist';
import { Song } from '../../../../Model/Song/songs';
import classes from './style';

const PlayButton = ({
  cssClass = {},
  isPlaying,
  togglePlay,
  song,
  playlist,
}: {
  cssClass?: Interpolation<Theme>;
  isPlaying: boolean;
  togglePlay: () => void;
  song?: Song;
  playlist?: Playlist;
}) => {
  const pressPlay = () => {};

  return (
    <div
      css={classes.root}
      onClick={(e) => {
        e.stopPropagation();
        togglePlay();
      }}
    >
      {isPlaying ? <PauseIcon css={cssClass} /> : <PlayArrowIcon css={cssClass} />}
    </div>
  );
};

export default PlayButton;
