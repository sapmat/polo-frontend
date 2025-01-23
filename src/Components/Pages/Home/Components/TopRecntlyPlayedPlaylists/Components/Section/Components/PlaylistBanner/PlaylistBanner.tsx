/** @jsxImportSource @emotion/react */
import { Playlist } from "../../../../../../../../../Model/Playlist/playlist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlaylistImage from "../../../../../../../../Util/PlaylistImage/PlaylistImage";
import classes from "../../style";

const PlaylistBanner = ({ playlist }: { playlist: Playlist }) => {
  return (
    <div css={classes.playlist}>
      <div css={classes.imageContainer}>
        <PlaylistImage playlist={playlist} cssclass={classes.playlistImage} />
        <button css={classes.button}>
          <PlayArrowIcon
            style={{
              color: "black",
            }}
            css={classes.play}
          />
        </button>
      </div>
      <div css={classes.details}>
        <p>{playlist.createdBy}</p>
      </div>
    </div>
  );
};

export default PlaylistBanner;
