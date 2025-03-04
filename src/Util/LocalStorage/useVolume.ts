import { useEffect, useState } from 'react';

const useVolume = () => {
  const [currentVolume, setCurrentVolume] = useState<number>(() => {
    return JSON.parse(localStorage.getItem('volume') || '1');
  });

  useEffect(() => {
    localStorage.setItem('volume', JSON.stringify(currentVolume));
  }, [currentVolume]);

  const changeCurrentVolume = (vol: number) => {
    setCurrentVolume(vol);
  };

  return { currentVolume, changeCurrentVolume };
};

export default useVolume;
