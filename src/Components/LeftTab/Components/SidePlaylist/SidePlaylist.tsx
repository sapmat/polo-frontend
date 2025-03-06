/** @jsxImportSource @emotion/react */
import PushPinIcon from '@mui/icons-material/PushPin';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Playlist } from '../../../../Model/Playlist/playlist';
import { setPlaying, togglePlaying } from '../../../../Store/songSlice';
import { theme } from '../../../../theme';
import usePlaylist from '../../../../Util/LocalStorage/usePlaylist';
import useSong from '../../../../Util/LocalStorage/useSong';
import PlayButton from '../../../Util/Buttons/PlayButton/PlayButton';
import ItemImage from '../../../Util/ItemImage/ItemImage';
import classes from './style';

interface SidePlaylistProps {
  playlist: Playlist;
  open: boolean;
}

const SidePlaylist = ({ playlist, open }: SidePlaylistProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isPlaying: boolean = useSelector((state: any) => state.playback.isPlaying);

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { updateCurrentSongId } = useSong();

  const isCurrentPlaylist = currentPlaylist?.id === playlist.id;
  const checkPlaying: boolean = isCurrentPlaylist && isPlaying;

  const togglePlay = () => {
    if (isCurrentPlaylist) {
      dispatch(togglePlaying());
    } else {
      setCurrentPlaylist(playlist);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

  const handleNavigate = () => {
    navigate(`/playlist/${playlist.id}`);
  };

  return (
    <div css={classes.playlist} onClick={handleNavigate}>
      <div css={classes.imageContainer}>
        <ItemImage item={playlist} cssClass={classes.image} />
        <div id={'play-button'} css={classes.imagePlay}>
          <PlayButton cssClass={classes.playButton} isPlaying={checkPlaying} togglePlay={togglePlay} />
        </div>
      </div>
      <div css={classes.sidePlaylistContent(open)}>
        <p css={classes.name}>{playlist.name}</p>
        <div css={classes.detailsBottom}>
          <div css={classes.pin(playlist.isPinned)}>
            <PushPinIcon sx={{ color: theme.colors['default'].main.main }} />
          </div>
          <p css={classes.createdBy}>{playlist.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePlaylist;
