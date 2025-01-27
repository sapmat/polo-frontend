/** @jsxImportSource @emotion/react */
import { playlists } from "../../../data";
import HomeSection from "./Components/Section/Section";
import RecentlyPlayedPlaylists from "./Components/RecentlyPlayedPlaylists/RecentlyPlayedPlaylists";
import classes from "./style";
import ScrollBarY from "../../Util/ScrollBar/ScrollBarY";
import { useRef, useState } from "react";

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
        generalHover={hovering}
        width={25}
        maxHeight={containerRef.current?.clientHeight || 0}
        scrollableElementRef={homeRef}
      />
      <div ref={homeRef} css={classes.home}>
        <RecentlyPlayedPlaylists />
        <HomeSection name="POPULAR SONGS" playlists={playlists} />
        <HomeSection name="POPULAR PLAYLISTS" playlists={playlists} />
        <HomeSection name="RECENTLY PLAYED" playlists={playlists} />
        //! Credits
      </div>
    </div>
  );
};

export default Home;
