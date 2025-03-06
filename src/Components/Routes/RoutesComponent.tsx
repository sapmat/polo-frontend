import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import PlaylistPage from '../Pages/Playlist';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/playlist/:id' element={<PlaylistPage />} />
      // TODO ALBUM PAGE
      // TODO ARTIST PAGE
    </Routes>
  );
};

export default RoutesComponent;
