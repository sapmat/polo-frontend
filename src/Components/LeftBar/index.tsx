/** @jsxImportSource @emotion/react */
import OpenBarButton from "./Components/OpenBarButton/OpenBarButton";
import Filter from "./Components/Filter/Filter";
import SidePlaylist from "./Components/Playlist/Playlist";
import { playlists } from "../../data";
import classes from "./style";

const LeftBar = () => {
  return (
    <div css={classes.leftBar}>
      <OpenBarButton />
      <Filter />
      <div css={classes.sidePlaylists}>
        {playlists.map((playlist, index) => (
          <SidePlaylist key={index} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
