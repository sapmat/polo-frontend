/** @jsxImportSource @emotion/react */
import { playlists } from "../../../data";
import HomeSection from "./Components/Section/Section";
import RecentlyPlayedPlaylists from "./Components/RecentlyPlayedPlaylists/RecentlyPlayedPlaylists";
import classes from "./style";

const Home = () => {
  return (
    <div css={classes.home}>
      <RecentlyPlayedPlaylists />
      <HomeSection name="POPULAR SONGS" playlists={playlists} />
      <HomeSection name="POPULAR PLAYLISTS" playlists={playlists} />
      <HomeSection name="RECENTLY PLAYED" playlists={playlists} />
      //! Credits
    </div>
  );
};

export default Home;
