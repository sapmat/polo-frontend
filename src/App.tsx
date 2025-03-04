/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router';
import BottomBar from './Components/BottomBar';
import LeftBar from './Components/LeftBar';
import RoutesComponent from './Components/Routes/RoutesComponent';
import TopBar from './Components/TopBar';
import { initStore, togglePlaying } from './Store/songSlice';
import classes from './style';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'Enter') {
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
          <LeftBar />
          <RoutesComponent />
        </div>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
