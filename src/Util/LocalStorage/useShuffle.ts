import { useState, useEffect } from "react";

const useShuffle = () => {
  const [isShuffle, setIsShuffle] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("isShuffle") || "false");
  });

  const switchShuffle = () => {
    const newState = !isShuffle;
    setIsShuffle(newState);
    localStorage.setItem("isShuffle", JSON.stringify(newState));
    window.dispatchEvent(new Event("local-storage-shuffle-changed"));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedValue = JSON.parse(localStorage.getItem("isShuffle") || "false");
      setIsShuffle(storedValue);
    };

    window.addEventListener("local-storage-shuffle-changed", handleStorageChange);

    return () => {
      window.removeEventListener("local-storage-shuffle-changed", handleStorageChange);
    };
  }, []);

  return { isShuffle, switchShuffle };
};

export default useShuffle;
