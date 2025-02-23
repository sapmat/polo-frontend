/** @jsxImportSource @emotion/react */
import classes from "./style";
import PlaylistImage from "../../../../../../Util/ItemImage/ItemImage";
import usePlaylist from "../../../../../../../Util/LocalStorage/usePlaylist";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Playlist } from "../../../../../../../Model/Playlist/playlist";
import {
  setPlaying,
  togglePlaying,
} from "../../../../../../../Store/songSlice";
import useSong from "../../../../../../../Util/LocalStorage/useSong";
import PlayButton from "../../../../../../Util/Buttons/PlayButton/PlayButton";

const TopRecentlyPlayedPlaylist = ({ playlist }: { playlist: Playlist }) => {
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
      <PlaylistImage cssClass={classes.image} item={playlist} />
      <div css={classes.name}>{playlist.name}</div>
      <button css={classes.button}>
        <PlayButton
          isPlaying={checkPlaying()}
          togglePlay={handlePlay}
          cssClass={classes.play}
        />
      </button>
    </div>
  );
};

export default TopRecentlyPlayedPlaylist;
