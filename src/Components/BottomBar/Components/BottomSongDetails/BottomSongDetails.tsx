/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import { Song } from '../../../../Model/Song/songs';
import ItemImage from '../../../Util/ItemImage/ItemImage';
import AddToPlaylistButton from '../AddToPlaylistButton/AddToPlaylistButton';
import classes from './style';

interface BottomSongDetailsProps {
  song: Song | undefined;
}

const BottomSongDetails = ({ song }: BottomSongDetailsProps) => {
  const navigate = useNavigate();

  if (!song) return <></>;

  const clickedName = () => {
    // TODO NAVIGATE TO ALBUM SONG IS FROM
  };

  const clickedArtist = (artistId: string) => {
    // TODO NAVIGATE TO ARTIST PAGE
  };

  return (
    <div css={classes.root}>
      <div css={classes.image}>
        <ItemImage item={song} cssClass={classes.image} />
      </div>
      <div css={classes.details}>
        <p css={classes.name}>{song.name}</p>
        <p css={classes.artists}>
          {song.artists.map(({ name, id }, index) => (
            <span key={id}>
              {index > 0 && ', '}
              <span css={classes.artist}>{name}</span>
            </span>
          ))}
        </p>
      </div>
      <AddToPlaylistButton />
    </div>
  );
};

export default BottomSongDetails;
