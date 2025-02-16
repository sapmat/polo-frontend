export interface Song {
  id: string;
  name: string;
  audioSrc: string;
  artists: string[];
  image: string;
  album: string;
  duration: string;
}

export const DefaultSong = {
  id: "Undefined",
  name: "Undefined",
  artists: ["Undefined"],
  audioSrc: "",
  image: "NUN",
  album: "Undefined",
  duration: "Undefined",
};
