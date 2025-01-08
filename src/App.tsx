import BottomBar from "./Components/BottomBar";
import CenterBody from "./Components/CenterBody";
import TopBar from "./Components/TopBar";
import "./App.css";
import { Song } from "./Model/Song/songs";

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
      <CenterBody />
      <BottomBar song={currentSong} />
    </div>
  );
}

export default App;
