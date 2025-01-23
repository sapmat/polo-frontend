/** @jsxImportSource @emotion/react */
import { Playlist } from "../../../../../../../Model/Playlist/playlist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import classes from "./style";
import PlaylistImage from "../../../../../../Util/PlaylistImage/PlaylistImage";

const TopRecentlyPlayedPlaylist = ({ playlist }: { playlist: Playlist }) => {
  return (
    <div css={classes.playlist}>
      <PlaylistImage cssclass={classes.image} playlist={playlist} />
      <div css={classes.name}>{playlist.name}</div>
      <button css={classes.button}>
        <PlayArrowIcon
          style={{
            color: "black",
          }}
          css={classes.play}
        />
      </button>
    </div>
  );
};

export default TopRecentlyPlayedPlaylist;
