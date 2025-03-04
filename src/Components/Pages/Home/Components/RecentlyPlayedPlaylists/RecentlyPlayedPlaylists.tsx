/** @jsxImportSource @emotion/react */
import { playlists } from '../../../../../data';
import { Playlist } from '../../../../../Model/Playlist/playlist';
import classes from './Components/TopRecentlyPlayedPlaylist/style';
import TopRecentlyPlayedPlaylist from './Components/TopRecentlyPlayedPlaylist/TopRecentlyPlayedPlaylist';

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
