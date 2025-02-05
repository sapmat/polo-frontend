/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { Playlist } from "../../../../../Model/Playlist/playlist";
import PlaylistBanner from "./Components/PlaylistBanner/PlaylistBanner";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import classes from "./style";

const HomeSection = ({
  name,
  playlists,
}: {
  name: string;
  playlists: Playlist[];
}) => {
  const [show, setShow] = useState<boolean>(false);

  const playlistsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      css={classes.section}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div css={classes.name}>{name}</div>
      <div css={classes.playlistsContainer}>
        <ScrollButton playlistsRef={playlistsRef} show={show} isRight={false} />
        <ScrollButton playlistsRef={playlistsRef} show={show} isRight={true} />
        <div ref={playlistsRef} css={classes.playlists}>
          {playlists.map((playlist, key) => (
            <PlaylistBanner key={key} playlist={playlist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
