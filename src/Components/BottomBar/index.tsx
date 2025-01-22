/** @jsxImportSource @emotion/react */
import { Song } from "../../Model/Song/songs";
import classes from "./style";
import Player from "./Components/Player/Player";

const BottomBar = ({ song }: { song: Song }) => {
  return (
    <div css={classes.bottomBar}>
      <div css={[classes.section, classes.songInfo]}>
        <div css={classes.songImage}>{song.image}</div>
        <div css={classes.details}>
          <p css={classes.name}>{song.name}</p>
          <p css={classes.artists}>{song.artists.join(", ")}</p>
        </div>
        //! ADD TO FAVORITES
      </div>

      <div css={[classes.section]}>
        <Player song={song} />
      </div>

      <div css={classes.section}></div>
    </div>
  );
};

export default BottomBar;
