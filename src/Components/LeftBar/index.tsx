/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { playlists } from "../../data";
import OpenBarButton from "./Components/OpenBarButton/OpenBarButton";
import Filter from "./Components/Filter/Filter";
import SidePlaylist from "./Components/Playlist/Playlist";
import classes from "./style";

const LeftBar = () => {
  const [open, changeOpen] = useState<boolean>(true);

  const setOpen = () => {
    changeOpen((prev) => !prev);
  };

  return (
    <div css={classes.leftBar(open)}>
      <OpenBarButton open={open} setOpen={setOpen} />
      <Filter />
      <div css={classes.playlists}>
        {playlists.map((playlist, index) => (
          <SidePlaylist key={index} playlist={playlist} open={open} />
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
