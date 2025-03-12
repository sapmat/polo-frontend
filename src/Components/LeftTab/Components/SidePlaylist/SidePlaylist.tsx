/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Playlist } from '../../../../Model/Playlist/playlist';
import { setPlaying, togglePlaying } from '../../../../Store/songSlice';
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
          <PlayButton
            cssClass={classes.play}
            viewBox={'0 0 24 24'}
            isPlaying={checkPlaying}
            togglePlay={togglePlay}
          />
        </div>
      </div>

      <div css={classes.content(open)}>
        <p css={classes.name}>{playlist.name}</p>

        <div css={classes.detailsBottom}>
          <div css={classes.pin(playlist.isPinned)}>
            <svg viewBox='0 0 16 16'>
              <path d='M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z' />
            </svg>
          </div>
          <p css={classes.createdBy}>{playlist.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default SidePlaylist;
