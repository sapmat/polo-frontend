import axios from "axios";
import { Song } from "../Model/Song/songs";

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

  static async getSongById(id: string): Promise<Song> {
    // return axios.get(`/song/${id}`);
    return id === "1"
      ? {
          name: "The Weekend Whip",
          artists: ["The Fold"],
          audioSrc: "/Audio/The Fold - The Weekend Whip (Official Audio).mp3",
          image: "TWW",
          album: "LEGO NINJAGO: For the Spinners",
          duration: "3:30",
        }
      : {
          name: "The Weekend Whip 2",
          artists: ["The Fold"],
          audioSrc: "/Audio/The Fold - The Weekend Whip (Official Audio).mp3",
          image: "TWW",
          album: "LEGO NINJAGO: For the Spinners",
          duration: "3:30",
        };
  }
}

export default SongService;
