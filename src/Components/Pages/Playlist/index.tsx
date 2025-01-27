/** @jsxImportSource @emotion/react */
import { useParams } from "react-router";
import classes from "./style";
import { playlists } from "../../../data";
import PlaylistImage from "../../Util/SongPlaylistImage/SongPlaylistImage";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useRef, useState } from "react";
import TableRow from "./Components/Table/TableRow";
import TableHeader from "./Components/Table/TableHeader";
import ScrollBarY from "../../Util/ScrollBar/ScrollBarY";

const PlaylistPage = () => {
  const params = useParams();
  const id: string = params.id || "";
  const playlist = playlists.find((p) => p.id === id);

  const generalRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [showMainHeader, setShowMainHeader] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);

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
        maxHeight={generalRef.current?.clientHeight || 0}
        scrollableElementRef={pageRef}
      />
      <div css={classes.bigBackground} />
      <div className="page" ref={pageRef} css={classes.page}>
        <header css={classes.mainHeader(showMainHeader)}>
          <button css={classes.playButton}>
            <PlayArrowIcon
              style={{
                color: "black",
              }}
              css={classes.play}
            />
          </button>
        </header>
        <div ref={headerRef}>
          <div css={classes.header}>
            <PlaylistImage item={playlist} cssclass={classes.image} />
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
            <button css={classes.contentPlayButton}>
              <PlayArrowIcon
                style={{
                  color: "black",
                }}
                css={classes.contentPlay}
              />
            </button>
          </div>
          <div>
            <TableHeader />
            {playlist.songs.map((song, index) => (
              <TableRow key={index} index={index} playlistSong={song} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
