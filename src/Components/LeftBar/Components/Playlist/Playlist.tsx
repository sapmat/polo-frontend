/** @jsxImportSource @emotion/react */
import PushPinIcon from "@mui/icons-material/PushPin";
import { Playlist } from "../../../../Model/Playlist/playlist";
import classes from "../../style";
import PlaylistImage from "../../../Util/PlaylistImage/PlaylistImage";
import { useNavigate } from "react-router";

const SidePlaylist = ({
  playlist,
  open,
}: {
  playlist: Playlist;
  open: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div
      css={classes.sidePlaylist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
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
