import useNextSong from "../Hooks/useNextSong";
import usePlaylist from "./usePlaylist";
import useQueue from "./useQueue";

export const useMovePointer = () => {
  const { currentPlaylist, playlistPointer, movePointer } = usePlaylist();
  const { queue, queuePointer, moveQueuePointer } = useQueue();

  const movePlaybackPointer = (direction: 1 | -1) => {
    if (queuePointer < 0 || queuePointer >= queue.length) {
      movePointer(direction, false);
    } else {
      moveQueuePointer(direction);
    }
  };

  const id: string | null =
    queuePointer < 0 || queuePointer >= queue.length - 1
      ? currentPlaylist.songs[playlistPointer + 1].songId
      : currentPlaylist.songs[queuePointer + 1].songId;

  useNextSong(id);

  return { movePlaybackPointer };
};
