import usePlaylist from '../LocalStorage/usePlaylist';
import useQueue from '../LocalStorage/useQueue';

export const useMovePointer = () => {
  const { movePointer } = usePlaylist();
  const { queue, queuePointer, moveQueuePointer } = useQueue();

  const movePlaybackPointer = (direction: 1 | -1) => {
    if (queuePointer < 0 || queuePointer >= queue.length) {
      movePointer(direction);
    } else {
      moveQueuePointer(direction);
    }
  };

  return { movePlaybackPointer };
};
