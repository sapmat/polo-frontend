/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Playlist } from '../../../../Model/Playlist/playlist';
import { Song } from '../../../../Model/Song/songs';
import { RightTabOption } from '../../../../Util/Enums/RightTabOption';
import { useNextSong } from '../../../../Util/Hooks/useNextSong';
import ItemImage from '../../../Util/ItemImage/ItemImage';
import ScrollBarY from '../../../Util/ScrollBar/ScrollBarY';
import NextSong from '../NextSong/NextSong';
import classes from './style';

interface CurrentSongProps {
  currentSong: Song | undefined;
  playlist: Playlist | undefined;
  hovering: boolean;
  setRightTab: (v: RightTabOption) => void;
}

const CurrentSong = ({ currentSong, playlist, hovering, setRightTab }: CurrentSongProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const currentId: string = params.id || '';

  const contentRef = useRef<HTMLDivElement>(null);

  const { nextSong } = useNextSong();

  if (!currentSong || !playlist) return <></>;

  const handlePlaylistClicked = () => {
    if (currentId !== playlist.id) navigate(`/playlist/${playlist.id}`);
  };

  const handelNavigateToAlbum = () => {
    // TODO NAVIGATE TO ALBUM PAGE
  };

  const handleAboutArtistClicked = () => {
    // TODO OPEN MODAL
  };

  const handelUserClicked = (_id: string) => {
    // TODO NAVIGATE TO USER PAGE
  };

  return (
    <div css={classes.root}>
      <div css={classes.top}>
        <div css={classes.playlistName} onClick={handlePlaylistClicked}>
          <p>{playlist.name}</p>
        </div>
        <div css={classes.extra}>
          <div> // TODO 3 DOTS </div>
          <div
            css={classes.close}
            onClick={() => {
              setRightTab(RightTabOption.NONE);
            }}
          >
            <svg viewBox='0 0 16 16'>
              <path d='M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z' />
            </svg>
          </div>
        </div>
      </div>

      <div css={classes.content} ref={contentRef}>
        <ScrollBarY
          generalHover={hovering}
          maxHeight={contentRef.current?.clientHeight || 0}
          scrollableElementRef={contentRef}
          width={15}
        />

        <div css={classes.imageContainer}>
          <ItemImage item={currentSong} cssClass={classes.image} onClick={handelNavigateToAlbum} />
        </div>

        <div css={classes.songDetails}>
          <div>
            <div css={classes.songName} onClick={handelNavigateToAlbum}>
              {currentSong.name}
            </div>
            <div css={classes.songArtists}>
              {currentSong.artists.map(({ name, id }, index) => (
                <span key={id}>
                  {index > 0 && ', '}
                  <span
                    css={classes.artist}
                    onClick={(e) => {
                      e.stopPropagation();
                      handelUserClicked(id);
                    }}
                  >
                    {name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div css={[classes.section, classes.aboutArtist]} onClick={handleAboutArtistClicked}>
          <div css={classes.sectionTop}>
            <p css={classes.sectionName}>About the artist</p>
          </div>
          // TODO ABOUT ARTIST
        </div>

        <div css={[classes.section, classes.credits]}> // TODO CREDITS </div>

        <div css={[classes.section, classes.nextInQueue]}>
          {nextSong ? (
            <>
              <div css={classes.sectionTop}>
                <p css={classes.sectionName}>Next in queue</p>
                <p css={classes.sectionExtra}>Open queue</p>
              </div>
              <NextSong nextSong={nextSong} />
            </>
          ) : (
            <div css={classes.sectionTop}>
              <p css={classes.sectionName}>Your queue is empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentSong;
