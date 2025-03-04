import axios from 'axios';
import { Playlist } from '../Model/Playlist/playlist';
import { playlists } from '../data';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/playlists`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

class PlaylistService {
  static async createPlaylist(playlist: Playlist): Promise<void> {
    return axiosInstance.put(`/`, { playlist });
  }

  static async getPlaylist(id: string): Promise<Playlist | undefined> {
    // return axios.get(`/${id}`);
    return playlists.find((playlist) => playlist.id === id);
  }

  static async search(input: string): Promise<Playlist[]> {
    return axiosInstance.put(`/search`, { input });
  }
}

export default PlaylistService;
