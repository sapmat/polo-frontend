/** @jsxImportSource @emotion/react */
import { Song } from '../../../../Model/Song/songs';
import ItemImage from '../../../Util/ItemImage/ItemImage';
import AddToPlaylistButton from '../AddToPlaylistButton/AddToPlaylistButton';
import classes from './style';

interface BottomSongDetailsProps {
  song: Song | undefined;
}

const BottomSongDetails = ({ song }: BottomSongDetailsProps) => {
  if (!song) return <></>;

  return (
    <div css={classes.root}>
      <div css={classes.image}>
        <ItemImage item={song} cssClass={classes.image} />
      </div>
      <div css={classes.details}>
        <p css={classes.name}>{song.name}</p>
        <p css={classes.artists}>{song.artists.join(', ')}</p>
      </div>
      <AddToPlaylistButton />
    </div>
  );
};

export default BottomSongDetails;
