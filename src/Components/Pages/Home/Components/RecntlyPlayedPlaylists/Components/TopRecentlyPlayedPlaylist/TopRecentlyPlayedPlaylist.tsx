/** @jsxImportSource @emotion/react */
import { Playlist } from "../../../../../../../Model/Playlist/playlist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import classes from "./style";
import PlaylistImage from "../../../../../../Util/SongPlaylistImage/SongPlaylistImage";
import { useNavigate } from "react-router";

const TopRecentlyPlayedPlaylist = ({ playlist }: { playlist: Playlist }) => {
  const navigate = useNavigate();

  return (
    <div
      css={classes.playlist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
      <PlaylistImage cssclass={classes.image} item={playlist} />
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
