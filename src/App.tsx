/** @jsxImportSource @emotion/react */
import BottomBar from "./Components/BottomBar";
import TopBar from "./Components/TopBar";
import classes from "./style";
import LeftBar from "./Components/LeftBar";
import RoutesComponent from "./Components/Routes/RoutesComponent";
import { BrowserRouter as Router } from "react-router";
import { useDispatch } from "react-redux";
import { initStore } from "./Store/songSlice";
import { useEffect } from "react";
import SongService from "./api/songs";
import { Song } from "./Model/Song/songs";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    SongService.getSongById("1").then((s1: Song) => {
      SongService.getSongById("2").then((s2: Song) => {
        dispatch(
          initStore({
            songs: [null, s1, s2],
            isPlaying: false,
            isLoop: false,
            isShuffle: false,
          })
        );
      });
    });
  }, [dispatch]);

  return (
    <Router>
      <div css={classes.app}>
        <TopBar />
        <div css={classes.centerBody}>
          <LeftBar />
          <RoutesComponent />
        </div>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
