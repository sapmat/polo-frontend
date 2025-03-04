import { useEffect, useState } from 'react';

const useSong = () => {
  const [currentSongId, setCurrentSongId] = useState<string | null>(() => {
    return JSON.parse(localStorage.getItem('currentSongId') || 'null');
  });

  const updateState = (): void => {
    const storedCurrentSongId: string = JSON.parse(localStorage.getItem('currentSongId') || 'null');

    setCurrentSongId(storedCurrentSongId);
  };

  const updateCurrentSongId = (id: string | null): void => {
    localStorage.setItem('currentSongId', JSON.stringify(id));
    window.dispatchEvent(new Event('local-storage-song-changed'));

    setCurrentSongId(id);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateState();
    };

    window.addEventListener('local-storage-song-changed', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage-song-changed', handleStorageChange);
    };
  }, []);

  return { currentSongId, updateCurrentSongId };
};

export default useSong;
