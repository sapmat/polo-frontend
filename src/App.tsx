/** @jsxImportSource @emotion/react */
import BottomBar from "./Components/BottomBar";
import TopBar from "./Components/TopBar";
import classes from "./style";
import LeftBar from "./Components/LeftBar";
import { Song } from "./Model/Song/songs";
import RoutesComponent from "./Components/Routes/RoutesComponent";
import { BrowserRouter as Router } from "react-router";

function App() {
  // will be in store
  const currentSong: Song = {
    name: "The Weekend Whip",
    artists: ["The Fold"],
    audioSrc: "/Audio/The Fold - The Weekend Whip (Official Audio).mp3",
    image: "TWW",
    album: "LEGO NINJAGO: For the Spinners"
  };

  return (
    <Router>
      <div css={classes.app}>
        <TopBar />
        <div css={classes.centerBody}>
          <LeftBar />
          <RoutesComponent />
        </div>
        <BottomBar song={currentSong} />
      </div>
    </Router>
  );
}

export default App;
