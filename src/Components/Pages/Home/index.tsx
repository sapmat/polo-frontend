/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import { playlists } from '../../../data';
import ScrollBarY from '../../Util/ScrollBar/ScrollBarY';
import RecentlyPlayedPlaylists from './Components/RecentlyPlayedPlaylists/RecentlyPlayedPlaylists';
import HomeSection from './Components/Section/Section';
import classes from './style';

const Home = () => {
  const [hovering, setHovering] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      css={classes.container}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <ScrollBarY
        hovering={hovering}
        width={13}
        maxHeight={containerRef.current?.clientHeight || 0}
        scrollableElementRef={homeRef}
      />
      <div ref={homeRef} css={classes.home}>
        <RecentlyPlayedPlaylists />
        <HomeSection name='POPULAR SONGS' playlists={playlists} />
        <HomeSection name='POPULAR PLAYLISTS' playlists={playlists} />
        <HomeSection name='RECENTLY PLAYED' playlists={playlists} />
        //! Credits
      </div>
    </div>
  );
};

export default Home;
