/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from 'react-router';
import { Playlist } from '../../../../Model/Playlist/playlist';
import { Song } from '../../../../Model/Song/songs';
import ItemImage from '../../../Util/ItemImage/ItemImage';
import classes from './style';

interface CurrentSongProps {
  currentSong: Song | undefined;
  playlist: Playlist | undefined;
  queue: Song[];
}

const CurrentSong = ({ currentSong, playlist, queue }: CurrentSongProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const currentId: string = params.id || '';

  if (!currentSong || !playlist) return <></>;

  const handlePlaylistClicked = () => {
    if (currentId !== playlist.id) navigate(`/playlist/${playlist.id}`);
  };

  return (
    <div css={classes.root}>
      <div css={classes.top}>
        <div css={classes.playlistName} onClick={handlePlaylistClicked}>
          <p>{playlist.name}</p>
        </div>
        <div css={classes.extra}>
          <div></div>
          <div>x</div>
        </div>
      </div>
      <div css={classes.imageContainer}>
        <ItemImage item={currentSong} cssClass={classes.image} />
      </div>
    </div>
  );
};

export default CurrentSong;
