/** @jsxImportSource @emotion/react */
import PushPinIcon from "@mui/icons-material/PushPin";
import { Playlist } from "../../../../Model/Playlist/playlist";
import classes from "../../style";
import PlaylistImage from "../../../Util/PlaylistImage/PlaylistImage";

const SidePlaylist = ({
  playlist,
  open,
}: {
  playlist: Playlist;
  open: boolean;
}) => {
  return (
    <div css={classes.sidePlaylist}>
      <PlaylistImage playlist={playlist} cssclass={classes.sidePlaylistImage} />
      <div css={classes.sidePlaylistContent(open)}>
        <p>{playlist.name}</p>
        <div css={classes.sidePlaylistBottom}>
          <div
            css={classes.pin}
            style={{ display: playlist.isPinned ? "" : "none" }}
          >
            <PushPinIcon sx={{ color: "rgb(153, 0, 255)" }} />
          </div>
          <p>{playlist.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePlaylist;
