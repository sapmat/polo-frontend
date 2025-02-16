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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      initStore({
        isPlaying: false,
      })
    );
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
