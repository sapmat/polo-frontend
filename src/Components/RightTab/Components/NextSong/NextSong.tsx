/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux';
import { Song } from '../../../../Model/Song/songs';
import { togglePlaying } from '../../../../Store/songSlice';
import { useMovePointer } from '../../../../Util/Hooks/useMovePointer';
import PlayButton from '../../../Util/Buttons/PlayButton/PlayButton';
import ItemImage from '../../../Util/ItemImage/ItemImage';
import classes from './style';

interface NextSongProps {
  nextSong: Song;
}

const NextSong = ({ nextSong }: NextSongProps) => {
  const dispatch = useDispatch();

  const { movePlaybackPointer } = useMovePointer();

  const toggleClicked = () => {
    movePlaybackPointer(1);
  };

  const togglePlay = () => {
    dispatch(togglePlaying());
  };

  return (
    <div css={classes.root} onDoubleClick={toggleClicked}>
      <div css={classes.imageContainer}>
        <ItemImage item={nextSong} cssClass={classes.image} />

        <div id={'play-button'} css={classes.imagePlay}>
          <PlayButton
            cssClass={classes.play}
            viewBox={'0 0 24 24'}
            isPlaying={false}
            togglePlay={togglePlay}
          />
        </div>
      </div>
      <div css={classes.content}>
        <p css={classes.name}>{nextSong.name}</p>
        <div css={classes.detailsBottom}>
          <p css={classes.artists}>
            {nextSong.artists.map(({ name, id }, index) => (
              <span key={id}>
                {index > 0 && ', '}
                <span
                  css={classes.artist}
                  onClick={(e) => {
                    e.stopPropagation();
                    // TODO NAVIGATE TO USER PAGE
                  }}
                >
                  {name}
                </span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextSong;
