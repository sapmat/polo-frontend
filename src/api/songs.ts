import axios from 'axios';
import { Song } from '../Model/Song/songs';
import { songs } from '../data';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/songs`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

class SongService {
  static async createSong(song: Song): Promise<void> {
    return axiosInstance.put(`/`, { song });
  }

  static async getSongById(id: string): Promise<Song | undefined> {
    // return axios.get(`/${id}`);
    return songs.find((song) => song.id == id);
  }

  static async search(input: string): Promise<Song[]> {
    return axiosInstance.put(`/search`, { input });
  }
}

export default SongService;
