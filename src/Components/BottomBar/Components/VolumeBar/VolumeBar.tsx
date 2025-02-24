/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import classes from "./style";
import VolumeIcon from "./VolumeIcon";
import useVolume from "../../../../Util/LocalStorage/useVolume";

const VolumeBar = ({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
}) => {
  const { currentVolume, changeCurrentVolume } = useVolume();
  const [volume, setVolume] = useState<number>(currentVolume);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      changeCurrentVolume(volume);
    }
  }, [volume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value) / 100);
  };

  return (
    <div css={classes.volume}>
      <VolumeIcon volume={volume} />
      <input
        type="range"
        id="volume"
        value={volume * 100}
        min="0"
        max="100"
        onChange={handleVolumeChange}
        style={{ "--volume": `${volume * 100}` } as React.CSSProperties}
      />
    </div>
  );
};

export default VolumeBar;
