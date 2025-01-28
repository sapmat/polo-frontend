/** @jsxImportSource @emotion/react */
import PushPinIcon from "@mui/icons-material/PushPin";
import { Playlist } from "../../../../Model/Playlist/playlist";
import classes from "./style";
import SongPlaylistImage from "../../../Util/SongPlaylistImage/SongPlaylistImage";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router";
import { useState } from "react";

const SidePlaylist = ({
  playlist,
  open,
}: {
  playlist: Playlist;
  open: boolean;
}) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      css={classes.playlist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div css={classes.imageContainer}>
        <SongPlaylistImage item={playlist} cssclass={classes.image} />
        <div css={classes.imagePlay(hovering)}>
          <PlayArrowIcon
            style={{
              color: "white",
            }}
          />
        </div>
      </div>
      <div css={classes.sidePlaylistContent(open)}>
        <p>{playlist.name}</p>
        <div css={classes.detailsBottom}>
          <div
            css={classes.pin}
            style={{ display: playlist.isPinned ? "" : "none" }}
          >
            <PushPinIcon sx={{ color: "rgb(153, 0, 255)" }} />
          </div>
          <p css={classes.createdBy}>{playlist.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePlaylist;
