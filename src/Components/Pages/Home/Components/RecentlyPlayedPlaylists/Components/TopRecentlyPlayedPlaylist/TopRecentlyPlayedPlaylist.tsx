/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Playlist } from '../../../../../../../Model/Playlist/playlist';
import { setPlaying, togglePlaying } from '../../../../../../../Store/songSlice';
import usePlaylist from '../../../../../../../Util/LocalStorage/usePlaylist';
import useSong from '../../../../../../../Util/LocalStorage/useSong';
import PlayButton from '../../../../../../Util/Buttons/PlayButton/PlayButton';
import ItemImage from '../../../../../../Util/ItemImage/ItemImage';
import classes from './style';

const TopRecentlyPlayedPlaylist = ({ playlist }: { playlist: Playlist }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isPlaying: boolean = useSelector((state: any) => state.playback.isPlaying);

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { updateCurrentSongId } = useSong();

  const isCurrentPlaylist = playlist.id === currentPlaylist?.id;
  const checkPlaying: boolean = isCurrentPlaylist && isPlaying;

  const handlePlay = () => {
    if (isCurrentPlaylist) {
      dispatch(togglePlaying());
    } else {
      setCurrentPlaylist(playlist);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

  return (
    <div css={classes.playlist} onClick={() => navigate(`/playlist/${playlist.id}`)}>
      <ItemImage cssClass={classes.image} item={playlist} />
      <div css={classes.name}>{playlist.name}</div>
      <button css={classes.button}>
        <PlayButton isPlaying={checkPlaying} togglePlay={handlePlay} cssClass={classes.play} />
      </button>
    </div>
  );
};

export default TopRecentlyPlayedPlaylist;
