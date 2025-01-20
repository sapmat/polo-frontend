import axios from "axios";
import { Playlist } from "../Model/Playlist/playlist";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

class PlaylistService {
  static async createPlaylist(playlist: Playlist) {
    return axiosInstance.put(`/playlist`, { playlist });
  }

  static async getPlaylist(id: string) {
    return axios.get(`/playlist/${id}`);
  }
}

export default PlaylistService;
