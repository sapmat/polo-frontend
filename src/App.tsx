/** @jsxImportSource @emotion/react */
import BottomBar from "./Components/BottomBar";
import TopBar from "./Components/TopBar";
import "./App.css";
import classes from "./style";
import { Song } from "./Model/Song/songs";
import LeftBar from "./Components/LeftBar";

function App() {
  // will be in store
  const currentSong: Song = {
    name: "The Weekend Whip",
    artists: ["The Fold"],
    audioSrc: "Audio/The Fold - The Weekend Whip (Official Audio).mp3",
    image: "TWW",
  };

  return (
    <div className="app">
      <TopBar />
      <div css={classes.centerBody}>
        <LeftBar />
      </div>
      <BottomBar song={currentSong} />
    </div>
  );
}

export default App;
