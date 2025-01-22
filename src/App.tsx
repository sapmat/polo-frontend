/** @jsxImportSource @emotion/react */
import BottomBar from "./Components/BottomBar";
import TopBar from "./Components/TopBar";
import classes from "./style";
import LeftBar from "./Components/LeftBar";
import { Song } from "./Model/Song/songs";
import Home from "./Components/Pages/Home";

function App() {
  // will be in store
  const currentSong: Song = {
    name: "The Weekend Whip",
    artists: ["The Fold"],
    audioSrc: "Audio/The Fold - The Weekend Whip (Official Audio).mp3",
    image: "TWW",
  };

  return (
    <div css={classes.app}>
      <TopBar />
      <div css={classes.centerBody}>
        <LeftBar />
        <Home />
      </div>
      <BottomBar song={currentSong} />
    </div>
  );
}

export default App;
