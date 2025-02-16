import axios from "axios";
import { DefaultSong, Song } from "../Model/Song/songs";
import { songs } from "../data";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

class SongService {
  static async createSong(song: Song): Promise<void> {
    return axiosInstance.put(`/song`, { song });
  }

  static async getSongById(id: string): Promise<Song | undefined> {
    // return axios.get(`/song/${id}`);
    return songs.find((song) => song.id == id);
  }
}

export default SongService;
