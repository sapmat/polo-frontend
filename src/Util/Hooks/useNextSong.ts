/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { setPrev, setCurrent, setNext } from "../../Store/songSlice";
import { Song } from "../../Model/Song/songs";
import SongService from "../../api/songs";

const useNextSong = (nextSongId: string | null) => {
  const dispatch = useDispatch();
  const currentSong: Song = useSelector((state: any) => state.playback.currentSong);
  const nextSong: Song = useSelector((state: any) => state.playback.nextSong);

  const updateSongs = async () => {
    try {
      const nextSongDetails: Song | null = nextSongId ? await SongService.getSongById(nextSongId) : null;

      dispatch(setPrev(currentSong));
      dispatch(setCurrent(nextSong));
      dispatch(setNext(nextSongDetails));
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  updateSongs();
};

export default useNextSong;
