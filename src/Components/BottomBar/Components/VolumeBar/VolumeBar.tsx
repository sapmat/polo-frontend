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
  const [mute, setMute] = useState<boolean>(
    JSON.parse(localStorage.getItem("isMute") || "false")
  );

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (!mute) {
        if (volume === 0) setMute(true);
        changeCurrentVolume(volume);
      }
    }
  }, [volume]);

  useEffect(() => {
    mute ? setVolume(0) : setVolume(Math.max(currentVolume, 0.1));
    localStorage.setItem("isMute", JSON.stringify(mute));
  }, [mute]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value) / 100);
    setMute(false)
  };

  return (
    <div css={classes.volume}>
      <VolumeIcon volume={volume} setMute={setMute} />
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
