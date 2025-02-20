import { useState, useEffect } from "react";

const useLoop = () => {
  const [isLoop, setIsLoop] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("isLoop") || "false");
  });

  const updateState = (): void => {
    const storedIsLoop: boolean = JSON.parse(
      localStorage.getItem("isLoop") || "false"
    );

    setIsLoop(storedIsLoop);
  };

  const switchLoop = () => {
    setIsLoop((prev) => !prev);
    window.dispatchEvent(new Event("local-storage-loop-changed"));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateState();
    };

    window.addEventListener("local-storage-loop-changed", handleStorageChange);

    return () => {
      window.removeEventListener(
        "local-storage-loop-changed",
        handleStorageChange
      );
    };
  }, []);

  return { isLoop, switchLoop };
};

export default useLoop;
