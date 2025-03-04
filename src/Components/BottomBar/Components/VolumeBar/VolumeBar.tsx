/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import useVolume from '../../../../Util/LocalStorage/useVolume';
import classes from './style';
import VolumeIcon from './VolumeIcon';

interface VolumeBarProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const VolumeBar = ({ audioRef }: VolumeBarProps) => {
  const { currentVolume, changeCurrentVolume } = useVolume();
  const [volume, setVolume] = useState<number>(currentVolume);
  const [mute, setMute] = useState<boolean>(false);

  useEffect(() => {
    const storedMute = JSON.parse(localStorage.getItem('isMute') || 'false');
    setMute(storedMute);
  }, []);

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
    mute ? setVolume(0) : setVolume(volume === 0 ? Math.max(currentVolume, 0.1) : volume);
    localStorage.setItem('isMute', JSON.stringify(mute));
  }, [mute]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value) / 100;
    setMute(newVolume === 0);
    setVolume(newVolume);
  }, []);

  return (
    <div css={classes.volume}>
      <VolumeIcon volume={volume} setMute={setMute} />
      <input
        type='range'
        value={volume * 100}
        min='0'
        max='100'
        onChange={handleVolumeChange}
        style={{ '--volume': `${volume * 100}` } as React.CSSProperties}
      />
    </div>
  );
};

export default VolumeBar;
