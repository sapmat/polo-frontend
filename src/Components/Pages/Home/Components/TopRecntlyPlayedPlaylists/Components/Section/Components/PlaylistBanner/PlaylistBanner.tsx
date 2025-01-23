/** @jsxImportSource @emotion/react */
import { Playlist } from "../../../../../../../../../Model/Playlist/playlist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlaylistImage from "../../../../../../../../Util/PlaylistImage/PlaylistImage";
import classes from "../../style";
import { useNavigate } from "react-router";

const PlaylistBanner = ({ playlist }: { playlist: Playlist }) => {
  const navigate = useNavigate();

  return (
    <div
      css={classes.playlist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
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
