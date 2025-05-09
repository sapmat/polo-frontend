/** @jsxImportSource @emotion/react */
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import PlaylistService from '../../../api/playlists';
import { Playlist } from '../../../Model/Playlist/playlist';
import { setPlaying, togglePlaying } from '../../../Store/songSlice';
import { theme } from '../../../theme';
import usePlaylist from '../../../Util/LocalStorage/usePlaylist';
import useSong from '../../../Util/LocalStorage/useSong';
import PlayButton from '../../Util/Buttons/PlayButton/PlayButton';
import ItemImage from '../../Util/ItemImage/ItemImage';
import ScrollBarY from '../../Util/ScrollBar/ScrollBarY';
import TableHeader from './Components/Table/TableHeader';
import TableRow from './Components/Table/TableRow';
import classes from './style';

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id: string = params.id || '';
  const [playlist, setPlaylist] = useState<Playlist>();

  const generalRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainHeaderRef = useRef<HTMLDivElement>(null);

  const [scrollbar, setScrollbar] = useState<JSX.Element>();

  const [showMainHeader, setShowMainHeader] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);
  const [dominantColor, setDominantColor] = useState<string>(theme.colors['default'].main.dark);

  const memoizedSongs = useMemo(
    () =>
      playlist?.songs.map((song, index) => (
        <TableRow key={uuidv4()} index={index} playlistSong={song} playlist={playlist} />
      )),
    [playlist?.songs],
  );

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { updateCurrentSongId } = useSong();

  const isPlaying: boolean = useSelector((state: any) => state.playback.isPlaying);

  useEffect(() => {
    PlaylistService.getPlaylist(id).then((res) => setPlaylist(res));
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const container = pageRef.current;
      const headerContainer = headerRef.current;

      if (container && headerContainer) {
        const scrollTop = container.scrollTop;
        const headerHeight = headerContainer.scrollHeight;

        if (scrollTop >= Math.round(headerHeight / 100) * 100) {
          setShowMainHeader(1);
        } else {
          setShowMainHeader(0);
        }
      }
    };

    const scrollContainer = pageRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pageRef.current]);

  useEffect(() => {
    setScrollbar(
      <ScrollBarY
        hovering={hovering}
        width={15}
        maxHeight={generalRef.current?.clientHeight || 0}
        scrollableElementRef={pageRef}
        reload={id}
      />,
    );
  }, [id, pageRef.current, hovering]);

  if (!playlist) return <></>;

  const isCurrentPlaylist = currentPlaylist?.id === playlist.id;
  const checkPlaying: boolean = isCurrentPlaylist && isPlaying;

  const formatDuration = (): string => {
    const h = Math.floor(playlist.duration / 60);
    const m = playlist.duration % 60;
    return `${h > 0 ? `${h} hr ` : ''}${m} min`;
  };

  const getSongDetails = () =>
    `• ${playlist.songs.length} song${playlist.songs.length > 1 ? 's' : ''}, ${formatDuration()}`;

  const togglePlay = () => {
    if (playlist.id === currentPlaylist?.id) {
      dispatch(togglePlaying());
    } else {
      setCurrentPlaylist(playlist);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

  const handelImageClicked = () => {
    // TODO NAVIGATE TO ALBUM PAGE
  };

  return (
    <div
      ref={generalRef}
      css={classes.general}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      {scrollbar}
      <div css={classes.bigBackground} />
      <header ref={mainHeaderRef} css={classes.mainHeader(showMainHeader)}>
        <div css={classes.headerPlay(dominantColor)}>
          <div css={classes.playButton}>
            <PlayButton
              cssClass={classes.play}
              viewBox={'0 0 24 24'}
              isPlaying={checkPlaying}
              togglePlay={togglePlay}
            />
          </div>

          <span css={classes.headerName}>{playlist.name}</span>
        </div>
        <TableHeader isAtTop />
      </header>
      <div className='page' ref={pageRef} css={classes.page}>
        <div ref={headerRef}>
          <div css={classes.header(dominantColor)}>
            <ItemImage
              item={playlist}
              cssClass={classes.image}
              setDominantColor={setDominantColor}
              onClick={handelImageClicked}
            />
            <div css={classes.details}>
              <div>{`${playlist.isPrivate ? 'Private' : 'Public'} Playlist`}</div>
              <div css={classes.name}>{playlist.name}</div>
              <div css={classes.extra}>
                <div css={classes.creator}>
                  <div>pfp</div>
                  <div>{playlist.createdBy}</div>
                </div>
                <div css={classes.songsDetails}>{getSongDetails()}</div>
              </div>
            </div>
          </div>
        </div>

        <div css={classes.content}>
          <div css={classes.background(dominantColor)}></div>
          <div css={classes.contentTop}>
            <div css={classes.playButton}>
              <PlayButton
                cssClass={classes.play}
                viewBox={'0 0 24 24'}
                isPlaying={checkPlaying}
                togglePlay={togglePlay}
              />
            </div>
          </div>
          <div>
            <TableHeader isAtTop={false} />
            {memoizedSongs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
