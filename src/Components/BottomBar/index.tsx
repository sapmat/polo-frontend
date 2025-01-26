/** @jsxImportSource @emotion/react */
import { Song } from "../../Model/Song/songs";
import classes from "./style";
import Player from "./Components/Player/Player";
import BottomSongDetails from "./Components/BottomSongDetails/BottomSongDetails";

const BottomBar = ({ song }: { song: Song }) => {
  return (
    <div css={classes.bottomBar}>
      <div css={classes.section}>
        <BottomSongDetails song={song} />
      </div>

      <div css={[classes.section]}>
        <Player song={song} />
      </div>

      <div css={classes.section}></div>
    </div>
  );
};

export default BottomBar;
