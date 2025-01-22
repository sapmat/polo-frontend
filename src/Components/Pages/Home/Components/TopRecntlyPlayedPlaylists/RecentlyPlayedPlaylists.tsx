/** @jsxImportSource @emotion/react */
import { playlists } from "../../../../../data";
import { Playlist } from "../../../../../Model/Playlist/playlist";
import TopRecentlyPlayedPlaylist from "./Components/Playlist/Playlist";
import classes from "./style";

const TopRecentlyPlayedPlaylists = () => {
  return (
    <div css={classes.playlists}>
      {playlists.slice(0, 8).map((playlist: Playlist) => (
        <TopRecentlyPlayedPlaylist playlist={playlist} />
      ))}
    </div>
  );
};

export default TopRecentlyPlayedPlaylists;
