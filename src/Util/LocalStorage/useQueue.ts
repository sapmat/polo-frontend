import { useEffect, useState } from 'react';
import { Song } from '../../Model/Song/songs';

const useQueue = () => {
  const [queue, setQueue] = useState<Song[]>(() => {
    const storedQueue: Song[] = JSON.parse(localStorage.getItem('queue') || '[]');
    const queuePointer: number = Number(localStorage.getItem('queuePointer') || '-1');
    return queuePointer < 0 ? [] : storedQueue;
  });

  const [queuePointer, setQueuePointer] = useState<number>(() => {
    return Number(localStorage.getItem('queuePointer') || '-1');
  });

  const updateState = (): void => {
    const storedQueue: Song[] = JSON.parse(localStorage.getItem('queue') || '[]');
    const storedPointer: number = Number(localStorage.getItem('queuePointer') || '-1');

    if (storedPointer < 0 || storedPointer >= storedQueue.length) {
      setQueue([]);
      setQueuePointer(-1);
    } else {
      setQueue(storedQueue);
      setQueuePointer(storedPointer);
    }
  };

  const addToQueue = (song: Song) => {
    const updatedQueue: Song[] = [...queue, song];
    localStorage.setItem('queue', JSON.stringify(updatedQueue));
    if (queuePointer === -1) localStorage.setItem('queuePointer', '0');
    updateState();
  };

  const removeFromQueue = (index: number) => {
    const updatedQueue: Song[] = queue.filter((_, i) => i !== index);
    localStorage.setItem('queue', JSON.stringify(updatedQueue));

    window.dispatchEvent(new Event('local-storage-queue-changed'));

    if (updatedQueue.length === 0) {
      localStorage.setItem('queuePointer', '-1');
    } else if (queuePointer >= updatedQueue.length) {
      localStorage.setItem('queuePointer', (updatedQueue.length - 1).toString());
    }

    window.dispatchEvent(new Event('local-storage-queue-pointer-changed'));

    updateState();
  };

  const moveQueuePointer = (direction: 1 | -1) => {
    if (queue.length === 0) return;

    const next: number = queuePointer + direction;

    if (next < 0 || next >= queue.length) {
      localStorage.setItem('queuePointer', '-1');
      setQueue([]);
    } else {
      localStorage.setItem('queuePointer', next.toString());
    }

    window.dispatchEvent(new Event('local-storage-queue-pointer-changed'));

    updateState();
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateState();
    };

    window.addEventListener('local-storage-queue-changed', handleStorageChange);
    window.addEventListener('local-storage-queue-pointer-changed', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage-queue-changed', handleStorageChange);
      window.removeEventListener('local-storage-queue-pointer-changed', handleStorageChange);
    };
  }, []);

  return {
    queue,
    queuePointer,
    setQueue,
    setQueuePointer,
    addToQueue,
    removeFromQueue,
    moveQueuePointer,
  };
};

export default useQueue;
