import { useState, useEffect } from "react";
import { Playlist } from "../../Model/Playlist/playlist";
import { useSelector } from "react-redux";

const usePlaylist = () => {
  const [currentPlaylist, setPlaylist] = useState<Playlist>(() => {
    const storedPlaylist = localStorage.getItem("playlist");
    return storedPlaylist ? JSON.parse(storedPlaylist) : [];
  });

  const [playlistPointer, setPlaylistPointer] = useState<number>(() => {
    return Number(localStorage.getItem("playlistPointer")) || 0;
  });
  const onLoop: boolean = useSelector((state: any) => state.playback.onLoop);

  const updateState = () => {
    setPlaylist(
      localStorage.getItem("playlist")
        ? JSON.parse(localStorage.getItem("playlist")!)
        : null
    );
    setPlaylistPointer(Number(localStorage.getItem("playlistPointer")) || 0);
  };

  const setCurrentPlaylist = (newPlaylist: Playlist, playlistPointer = 0) => {
    localStorage.setItem("playlist", JSON.stringify(newPlaylist));
    localStorage.setItem("playlistPointer", playlistPointer.toString());
    updateState();
  };

  const movePointer = (direction: 1 | -1) => {
    if (!currentPlaylist) return;

    const current: number =
      Number(localStorage.getItem("playlistPointer")) || 0;
    let next;

    if (onLoop) {
      next = (current + direction) % currentPlaylist.songs.length;
      if (next < 0) next += currentPlaylist.songs.length;
    } else {
      next = Math.max(
        0,
        Math.min(current + direction, currentPlaylist.songs.length - 1)
      );
    }

    localStorage.setItem("playlistPointer", next.toString());
    updateState();
  };

  useEffect(() => {
    const handleStorageChange = () => updateState();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return { currentPlaylist, playlistPointer, setCurrentPlaylist, movePointer };
};

export default usePlaylist;
