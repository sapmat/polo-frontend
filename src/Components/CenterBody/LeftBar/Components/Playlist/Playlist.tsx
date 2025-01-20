/** @jsxImportSource @emotion/react */
import PushPinIcon from "@mui/icons-material/PushPin";
import { Playlist } from "../../../../../Model/Playlist/playlist";
import classes from "../../../style";

const SidePlaylist = ({ playlist }: { playlist: Playlist }) => {
  return (
    <div css={classes.sidePlaylist}>
      <div css={classes.sidePlaylistImage}>{playlist.image}</div>
      <div css={classes.sidePlaylistContent}>
        <p>{playlist.name}</p>
        <div css={classes.sidePlaylistBottom}>
          <div
            css={classes.pin}
            style={{ display: playlist.isPinned ? "" : "none" }}
          >
            <PushPinIcon sx={{ color: "#00ff00" }} />
          </div>
          <p css={classes.sidePlaylistCreator}>{playlist.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePlaylist;
