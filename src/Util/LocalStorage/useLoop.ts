import { useEffect, useState } from 'react';

const useLoop = () => {
  const [isLoop, setIsLoop] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('isLoop') || 'false');
  });

  const switchLoop = () => {
    const newState = !isLoop;
    setIsLoop(newState);
    localStorage.setItem('isLoop', JSON.stringify(newState));
    window.dispatchEvent(new Event('local-storage-loop-changed'));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedValue = JSON.parse(localStorage.getItem('isLoop') || 'false');
      setIsLoop(storedValue);
    };

    window.addEventListener('local-storage-loop-changed', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage-loop-changed', handleStorageChange);
    };
  }, []);

  return { isLoop, switchLoop };
};

export default useLoop;
