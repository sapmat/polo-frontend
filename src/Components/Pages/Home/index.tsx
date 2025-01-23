/** @jsxImportSource @emotion/react */
import { playlists } from "../../../data";
import HomeSection from "./Components/TopRecntlyPlayedPlaylists/Components/Section/Section";
import TopRecentlyPlayedPlaylists from "./Components/TopRecntlyPlayedPlaylists/RecentlyPlayedPlaylists";
import classes from "./style";

const Home = () => {
  return (
    <div css={classes.home}>
      <TopRecentlyPlayedPlaylists />
      <HomeSection name="POPULAR SONGS" playlists={playlists} />
      <HomeSection name="POPULAR PLAYLISTS" playlists={playlists} />
      <HomeSection name="RECENTLY PLAYED" playlists={playlists} />
      //! Credits
    </div>
  );
};

export default Home;
