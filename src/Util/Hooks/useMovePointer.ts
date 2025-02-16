import usePlaylist from "../LocalStorage/usePlaylist";
import useQueue from "../LocalStorage/useQueue";
import useSong from "../LocalStorage/useSong";

export const useMovePointer = () => {
  const { currentPlaylist, playlistPointer, movePointer } = usePlaylist();
  const { queue, queuePointer, moveQueuePointer } = useQueue();
  const { updateCurrentSongId } = useSong();

  const movePlaybackPointer = (direction: 1 | -1) => {
    if (queuePointer < 0 || queuePointer >= queue.length) {
      movePointer(direction);
    } else {
      moveQueuePointer(direction);
    }

    let id: string | null = null;

    if (currentPlaylist) {
      if (queuePointer < 0 || queuePointer >= queue.length) {
        if (currentPlaylist.songs[playlistPointer + 1]) {
          id = currentPlaylist.songs[playlistPointer + 1].songId;
        }
      } else {
        if (currentPlaylist.songs[queuePointer + 1]) {
          id = currentPlaylist.songs[queuePointer + 1].songId;
        }
      }
    }

    updateCurrentSongId(id);
  };

  return { movePlaybackPointer };
};
