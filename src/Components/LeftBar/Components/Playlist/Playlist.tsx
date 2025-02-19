/** @jsxImportSource @emotion/react */
import PushPinIcon from "@mui/icons-material/PushPin";
import { Playlist } from "../../../../Model/Playlist/playlist";
import classes from "./style";
import SongPlaylistImage from "../../../Util/SongPlaylistImage/SongPlaylistImage";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router";
import { useState } from "react";
import usePlaylist from "../../../../Util/LocalStorage/usePlaylist";
import useSong from "../../../../Util/LocalStorage/useSong";
import { setPlaying, togglePlaying } from "../../../../Store/songSlice";
import { useDispatch } from "react-redux";
import PlayButton from "../../../Util/Buttons/PlayButton/PlayButton";

const SidePlaylist = ({
  playlist,
  open,
}: {
  playlist: Playlist;
  open: boolean;
}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [hovering, setHovering] = useState<boolean>(false);

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { updateCurrentSongId } = useSong();

  const togglePlay = () => {
    if (playlist.id === currentPlaylist?.id) {
      dispatch(togglePlaying());
    } else {
      console.log(playlist.songs[0].songId);

      setCurrentPlaylist(playlist);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

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
      <div
        css={classes.imageContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <SongPlaylistImage item={playlist} cssClass={classes.image} />
        <div css={classes.imagePlay(hovering)}>
          <PlayButton isPlaying={true} togglePlay={togglePlay} />
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
