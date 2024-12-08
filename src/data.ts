import { Playlist } from "./Model/Playlist/playlist";

export const playlists: Playlist[] = [
  {
    name: "Liked Songs",
    image: "img",
    songs: [{ name: "song 1", mp3: "...", artist: "someone" }],
    createdBy: "Polo",
    isPinned: true,
  },
  {
    name: "Pinned 1",
    image: "img",
    songs: [{ name: "song 1", mp3: "...", artist: "someone" }],
    createdBy: "someone",
    isPinned: true,
  },
  {
    name: "Pinned 2",
    image: "img",
    songs: [{ name: "song 2", mp3: "...", artist: "someone" }],
    createdBy: "Me",
    isPinned: true,
  },
  {
    name: "PLaylist 1",
    image: "img",
    songs: [{ name: "song 11", mp3: "...", artist: "someone" }],
    createdBy: "Me",
    isPinned: false,
  },
  {
    name: "PLaylist 2",
    image: "img",
    songs: [{ name: "song 12", mp3: "...", artist: "someone" }],
    createdBy: "someone",
    isPinned: false,
  },
];
