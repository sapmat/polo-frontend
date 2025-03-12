/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router';
import BottomBar from './Components/BottomBar';
import LeftTab from './Components/LeftTab';
import RightTab from './Components/RightTab';
import RoutesComponent from './Components/Routes/RoutesComponent';
import TopBar from './Components/TopBar';
import { initStore, togglePlaying } from './Store/songSlice';
import classes from './style';
import { RightTabOption } from './Util/Enums/RightTabOption';
import useSong from './Util/LocalStorage/useSong';

function App() {
  const dispatch = useDispatch();
  const { currentSongId } = useSong();

  const [rightTab, setRightTab] = useState<RightTabOption>(() =>
    currentSongId ? RightTabOption.CURRENT_SONG : RightTabOption.NONE,
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        dispatch(togglePlaying());
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    dispatch(
      initStore({
        isPlaying: false,
      }),
    );
  }, [dispatch]);

  return (
    <Router>
      <div css={classes.app}>
        <TopBar />
        <div css={classes.centerBody}>
          <LeftTab />
          <RoutesComponent />
          <RightTab display={rightTab} setRightTab={setRightTab} />
        </div>
        <BottomBar rightTab={rightTab} setRightTab={setRightTab} />
      </div>
    </Router>
  );
}

export default App;
