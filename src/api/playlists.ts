import axios from "axios";
import { Playlist } from "../Model/Playlist/playlist";
import { playlists } from "../data";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

class PlaylistService {
  static async createPlaylist(playlist: Playlist): Promise<void> {
    return axiosInstance.put(`/playlist`, { playlist });
  }

  static async getPlaylist(id: string): Promise<Playlist | undefined> {
    // return axios.get(`/playlist/${id}`);
    return playlists.find((playlist) => playlist.id === id);
  }
}

export default PlaylistService;
