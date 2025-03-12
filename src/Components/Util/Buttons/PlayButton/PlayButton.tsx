/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import PauseIcon from '@mui/icons-material/Pause';
import classes from './style';

interface PlayButtonProps {
  cssClass?: Interpolation<Theme>;
  viewBox: string;
  isPlaying: boolean;
  togglePlay: () => void;
}

const PlayButton = ({ cssClass = {}, viewBox, isPlaying, togglePlay }: PlayButtonProps) => {
  return (
    <div
      css={classes.root}
      onClick={(e) => {
        e.stopPropagation();
        togglePlay();
      }}
    >
      {isPlaying ? (
        <PauseIcon css={cssClass} />
      ) : (
        <svg css={cssClass} viewBox={viewBox}>
          <path d='m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z' />
        </svg>
      )}
    </div>
  );
};

export default PlayButton;
