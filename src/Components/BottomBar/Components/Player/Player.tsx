/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { PiShuffleBold } from "react-icons/pi";
import { SlLoop } from "react-icons/sl";
import classes from "./style";
import { Song } from "../../../../Model/Song/songs";
import { useMovePointer } from "../../../../Util/LocalStorage/util";

const Player = ({ song }: { song: Song | null }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);

  const [isShuffle, setShuffle] = useState<boolean>(false);
  const [isLoop, setLoop] = useState<boolean>(false);

  const { movePlaybackPointer } = useMovePointer();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    handleLoadedMetadata();
  }, [song]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleNext = () => {
    movePlaybackPointer(1);
  };

  const handlePrev = () => {
    if (progress > 1) {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        setProgress(0);
      }
    } else {
      movePlaybackPointer(-1);
    }
  };

  const handleShuffle = () => {
    setShuffle((prev) => !prev);
  };

  const handleLoop = () => {
    setLoop((prev) => !prev);
  };

  return (
    <div css={classes.player}>
      <div css={classes.buttons}>
        <button css={classes.shuffleButton} onClick={handleShuffle}>
          <PiShuffleBold color={isShuffle ? "#00FF00" : ""} />
        </button>
        <button css={classes.skipButtons} onClick={handlePrev}>
          <SkipPreviousIcon />
        </button>
        <button css={classes.playButton} onClick={togglePlayPause}>
          {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
        </button>
        <button css={classes.skipButtons} onClick={handleNext}>
          <SkipNextIcon />
        </button>
        <button css={classes.loopButton} onClick={handleLoop}>
          <SlLoop color={isLoop ? "#00FF00" : ""} />
        </button>
      </div>

      <div css={classes.progressBar}>
        <p>{formatTime((progress / 100) * totalDuration)}</p>

        <input
          type="range"
          value={progress}
          min="0"
          max="100"
          onChange={handleSeek}
          style={{ "--progress": `${progress}` } as React.CSSProperties}
        />

        <p>{formatTime(totalDuration)}</p>
      </div>

      <audio
        ref={audioRef}
        src={song ? song.audioSrc : ""}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default Player;
