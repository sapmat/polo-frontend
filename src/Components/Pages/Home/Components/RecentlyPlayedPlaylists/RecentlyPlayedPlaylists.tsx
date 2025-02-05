/** @jsxImportSource @emotion/react */
import { playlists } from "../../../../../data";
import { Playlist } from "../../../../../Model/Playlist/playlist";
import TopRecentlyPlayedPlaylist from "./Components/TopRecentlyPlayedPlaylist/TopRecentlyPlayedPlaylist";
import classes from "./Components/TopRecentlyPlayedPlaylist/style";

const RecentlyPlayedPlaylists = () => {
  return (
    <div css={classes.playlists}>
      {playlists.slice(0, 8).map((playlist: Playlist, key) => (
        <TopRecentlyPlayedPlaylist key={key} playlist={playlist} />
      ))}
    </div>
  );
};

export default RecentlyPlayedPlaylists;
