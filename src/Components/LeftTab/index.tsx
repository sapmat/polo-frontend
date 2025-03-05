/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import { playlists } from '../../data';
import ScrollBarY from '../Util/ScrollBar/ScrollBarY';
import Filter from './Components/Filter/Filter';
import OpenBarButton from './Components/OpenBarButton/OpenBarButton';
import SidePlaylist from './Components/SidePlaylist/SidePlaylist';
import classes from './style';

const LeftTab = () => {
  const [open, changeOpen] = useState<boolean>(true);
  const [hovering, setHovering] = useState<boolean>(false);

  const playlistsRef = useRef<HTMLDivElement>(null);

  const setOpen = () => {
    changeOpen((prev) => !prev);
  };

  return (
    <div css={classes.LeftTab(open)}>
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
          reload={playlists.length}
        />
        {playlists.map((playlist, index) => (
          <SidePlaylist key={index} playlist={playlist} open={open} />
        ))}
      </div>
    </div>
  );
};

export default LeftTab;
