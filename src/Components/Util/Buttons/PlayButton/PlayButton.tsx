/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Song } from "../../../../Model/Song/songs";
import { Playlist } from "../../../../Model/Playlist/playlist";

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
    <div onClick={togglePlay}>
      {isPlaying ? (
        <PauseIcon css={cssClass} />
      ) : (
        <PlayArrowIcon css={cssClass} />
      )}
    </div>
  );
};

export default PlayButton;
