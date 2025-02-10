/** @jsxImportSource @emotion/react */
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import classes from "../../style";
import { useNavigate } from "react-router";
import { Playlist } from "../../../../../../../Model/Playlist/playlist";
import SongPlaylistImage from "../../../../../../Util/SongPlaylistImage/SongPlaylistImage";

const PlaylistBanner = ({ playlist }: { playlist: Playlist }) => {
  const navigate = useNavigate();

  return (
    <div
      css={classes.playlist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
      <div css={classes.imageContainer}>
        <SongPlaylistImage item={playlist} cssClass={classes.playlistImage} />
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
