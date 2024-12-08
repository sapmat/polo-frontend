import OpenBarButton from "./Components/OpenBarButton/OpenBarButton";
import Filter from "./Components/Filter/Filter";
import SidePlaylist from "./Components/Playlist/Playlist";
import { playlists } from "../../../data";
import "./style.css"

const LeftBar = () => {
  return (
    <div className="left-bar">
      <OpenBarButton />
      <Filter />
      <div className="side-playlists">
        {playlists.map((playlist, index) => (
          <SidePlaylist key={index} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
