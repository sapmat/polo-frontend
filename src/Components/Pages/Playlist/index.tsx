/** @jsxImportSource @emotion/react */
import { useParams } from "react-router";
import classes from "./style";
import PlaylistImage from "../../Util/SongPlaylistImage/SongPlaylistImage";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useRef, useState } from "react";
import TableRow from "./Components/Table/TableRow";
import TableHeader from "./Components/Table/TableHeader";
import ScrollBarY from "../../Util/ScrollBar/ScrollBarY";
import PlayButton from "../../Util/Buttons/PlayButton/PlayButton";
import { useDispatch, useSelector } from "react-redux";
import { togglePlaying, setPlaying } from "../../../Store/songSlice";
import usePlaylist from "../../../Util/LocalStorage/usePlaylist";
import { Playlist } from "../../../Model/Playlist/playlist";
import PlaylistService from "../../../api/playlists";
import useSong from "../../../Util/LocalStorage/useSong";

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id: string = params.id || "";
  const [playlist, setPlaylist] = useState<Playlist>();

  const generalRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainHeaderRef = useRef<HTMLDivElement>(null);

  const [showMainHeader, setShowMainHeader] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);

  const { currentPlaylist, setCurrentPlaylist } = usePlaylist();
  const { updateCurrentSongId } = useSong();

  const isPlaying: boolean = useSelector(
    (state: any) => state.playback.isPlaying
  );

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
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  if (!playlist) return <></>;

  const formatDuration = (): string => {
    const h = Math.floor(playlist.duration / 60);
    const m = playlist.duration % 60;
    return `${h > 0 ? `${h} hr ` : ""}${m} min`;
  };

  const getSongDetails = () =>
    `• ${playlist.songs.length} song${
      playlist.songs.length > 1 ? "s" : ""
    }, ${formatDuration()}`;

  const togglePlay = () => {
    if (playlist.id === currentPlaylist?.id) {
      dispatch(togglePlaying());
    } else {
      console.log(playlist.songs[0].songId);

      setCurrentPlaylist(playlist);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

  const isPlaylistPlaying = (): boolean =>
    currentPlaylist.id === playlist.id && isPlaying;  

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
      <ScrollBarY
        generalHover={hovering}
        width={15}
        maxHeight={generalRef.current?.clientHeight || 0}
        scrollableElementRef={pageRef}
      />
      <div css={classes.bigBackground} />
      <header ref={mainHeaderRef} css={classes.mainHeader(showMainHeader)}>
        <div css={classes.headerPlay}>
          <button css={classes.playButton}>
            <PlayArrowIcon css={classes.play} />
          </button>
          <span css={classes.headerName}>{playlist.name}</span>
        </div>
        <TableHeader isAtTop />
      </header>
      <div className="page" ref={pageRef} css={classes.page}>
        <div ref={headerRef}>
          <div css={classes.header}>
            <PlaylistImage item={playlist} cssClass={classes.image} />
            <div css={classes.details}>
              <div>{`${
                playlist.isPrivate ? "Private" : "Public"
              } Playlist`}</div>
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
          <div css={classes.background}></div>
          <div css={classes.contentTop}>
            <div css={{ display: "flex" }}>
              <PlayButton
                cssClass={classes.play}
                isPlaying={isPlaylistPlaying()}
                togglePlay={togglePlay}
              />
            </div>
          </div>
          <div>
            <TableHeader isAtTop={false} />
            {playlist.songs.map((song, index) => {
              return (
                <TableRow key={song.songId} index={index} playlistSong={song} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
