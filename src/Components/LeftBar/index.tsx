/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { playlists } from "../../data";
import OpenBarButton from "./Components/OpenBarButton/OpenBarButton";
import Filter from "./Components/Filter/Filter";
import SidePlaylist from "./Components/Playlist/Playlist";
import classes from "./style";
import ScrollBarY from "../Util/ScrollBar/ScrollBarY";

const LeftBar = () => {
  const [open, changeOpen] = useState<boolean>(true);
  const [hovering, setHovering] = useState<boolean>(false);

  const leftBarRef = useRef<HTMLDivElement>(null);
  const playlistsRef = useRef<HTMLDivElement>(null);

  const setOpen = () => {
    changeOpen((prev) => !prev);
  };

  return (
    <div ref={leftBarRef} css={classes.leftBar(open)}>
      <OpenBarButton open={open} setOpen={setOpen} />
      <Filter />
      <div
        ref={playlistsRef}
        css={classes.playlists}
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        <ScrollBarY
          generalHover={hovering}
          width={12}
          maxHeight={playlistsRef.current?.clientHeight || 0}
          scrollableElementRef={playlistsRef}
        />
        {playlists.map((playlist, index) => (
          <SidePlaylist key={index} playlist={playlist} open={open} />
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
