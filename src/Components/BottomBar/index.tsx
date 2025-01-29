/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { Song } from "../../Model/Song/songs";
import classes from "./style";
import Player from "./Components/Player/Player";
import BottomSongDetails from "./Components/BottomSongDetails/BottomSongDetails";
import { useSelector } from "react-redux";

const BottomBar = () => {
  const currentSong: Song = useSelector((state: any) => state.playback.currentSong);

  return (
    <div css={classes.bottomBar}>
      <div css={classes.section}>
        <BottomSongDetails song={currentSong} />
      </div>

      <div css={[classes.section]}>
        <Player song={currentSong} />
      </div>

      <div css={classes.section}></div>
    </div>
  );
};

export default BottomBar;
