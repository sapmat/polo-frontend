import PushPinIcon from "@mui/icons-material/PushPin";
import { Playlist } from "../../../../../Model/Playlist/playlist";

const SidePlaylist = ({ playlist }: { playlist: Playlist }) => {
  return (
    <div className="side-playlist">
      <div className="side-playlist-image">{playlist.image}</div>
      <div className="side-playlist-content">
        <p className="side-playlist-name">{playlist.name}</p>
        <div className="side-playlist-bottom">
          <div
            className="pin"
            style={{ display: playlist.isPinned ? "" : "none" }}
          >
            <PushPinIcon sx={{ color: "#00ff00" }} />
          </div>
          <p className="side-playlist-creator">{playlist.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePlaylist;
