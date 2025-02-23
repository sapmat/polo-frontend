import { useState, useEffect } from "react";

const useShuffle = () => {
  const [isShuffle, setIsShuffle] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("isShuffle") || "false");
  });

  const updateState = (): void => {
    localStorage.setItem("isShuffle", JSON.stringify(isShuffle));
  };

  const switchShuffle = () => {
    setIsShuffle((prev) => !prev);
    window.dispatchEvent(new Event("local-storage-shuffle-changed"));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateState();
    };

    window.addEventListener(
      "local-storage-shuffle-changed",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "local-storage-shuffle-changed",
        handleStorageChange
      );
    };
  }, []);

  return { isShuffle, switchShuffle };
};

export default useShuffle;
