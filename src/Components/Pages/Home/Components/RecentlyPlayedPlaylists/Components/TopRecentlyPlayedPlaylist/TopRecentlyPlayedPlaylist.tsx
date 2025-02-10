/** @jsxImportSource @emotion/react */
import { Playlist } from "../../../../../../../Model/Playlist/playlist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import classes from "./style";
import PlaylistImage from "../../../../../../Util/SongPlaylistImage/SongPlaylistImage";
import { useNavigate } from "react-router";
import usePlaylist from "../../../../../../../Util/LocalStorage/usePlaylist";

const TopRecentlyPlayedPlaylist = ({ playlist }: { playlist: Playlist }) => {
  const { setCurrentPlaylist } = usePlaylist();
  const navigate = useNavigate();

  const handlePlay = () => {
    setCurrentPlaylist(playlist);
  };

  return (
    <div
      css={classes.playlist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
      <PlaylistImage cssClass={classes.image} item={playlist} />
      <div css={classes.name}>{playlist.name}</div>
      <button
        css={classes.button}
        onClick={(e) => {
          e.stopPropagation();
          handlePlay();
        }}
      >
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
