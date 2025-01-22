/** @jsxImportSource @emotion/react */
import TopRecentlyPlayedPlaylists from "./Components/TopRecntlyPlayedPlaylists/RecentlyPlayedPlaylists";
import classes from "./style";

const Home = () => {
  return (
    <div css={classes.home}>
      <TopRecentlyPlayedPlaylists />
    </div>
  );
};

export default Home;
