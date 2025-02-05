import useNextSong from "../Hooks/useNextSong";
import usePlaylist from "./usePlaylist";
import useQueue from "./useQueue";

export const useMovePointer = () => {
  const { currentPlaylist, playlistPointer, movePointer } = usePlaylist();
  const { queue, queuePointer, moveQueuePointer } = useQueue();
  const { updateSongs } = useNextSong();

  const movePlaybackPointer = (direction: 1 | -1) => {
    if (queuePointer < 0 || queuePointer >= queue.length) {
      movePointer(direction);
    } else {
      moveQueuePointer(direction);
    }

    const id: string | null = currentPlaylist
      ? queuePointer < 0 || queuePointer >= queue.length - 1
        ? currentPlaylist.songs[playlistPointer + 1]
          ? currentPlaylist.songs[playlistPointer + 1].songId
          : null
        : currentPlaylist.songs[queuePointer + 1]
        ? currentPlaylist.songs[queuePointer + 1].songId
        : null
      : null;

    updateSongs(id);
  };

  return { movePlaybackPointer };
};
