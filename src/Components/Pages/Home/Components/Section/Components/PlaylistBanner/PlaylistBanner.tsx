/** @jsxImportSource @emotion/react */
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import classes from "../../style";
import ItemImage from "../../../../../../Util/ItemImage/ItemImage";
import PlayButton from "../../../../../../Util/Buttons/PlayButton/PlayButton";
import usePlaylist from "../../../../../../../Util/LocalStorage/usePlaylist";
import useSong from "../../../../../../../Util/LocalStorage/useSong";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Playlist } from "../../../../../../../Model/Playlist/playlist";
import {
  setPlaying,
  togglePlaying,
} from "../../../../../../../Store/songSlice";

const PlaylistBanner = ({ playlist }: { playlist: Playlist }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isPlaying: boolean = useSelector(
    (state: any) => state.playback.isPlaying
  );

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { updateCurrentSongId } = useSong();

  const handlePlay = () => {
    if (playlist.id === currentPlaylist?.id) {
      dispatch(togglePlaying());
    } else {
      setCurrentPlaylist(playlist);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

  const checkPlaying = (): boolean => {
    return currentPlaylist.id === playlist.id && isPlaying;
  };

  return (
    <div
      css={classes.playlist}
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
      <div css={classes.imageContainer}>
        <ItemImage item={playlist} cssClass={classes.playlistImage} />
        <button css={classes.button}>
          <PlayButton
            isPlaying={checkPlaying()}
            togglePlay={handlePlay}
            cssClass={classes.play}
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
