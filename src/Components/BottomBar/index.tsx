/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Song } from "../../Model/Song/songs";
import classes from "./style";
import "./style.css";

const BottomBar = ({ song }: { song: Song }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    handleLoadedMetadata();
  }, [song]);

  useEffect(() => {
    if (progress === 100) {
      setProgress(0);
      setIsPlaying(false);
    }
  }, [progress]);

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
    return;
  };

  const handlePrev = () => {
    if (progress > 1) setProgress(0);
    return;
  };

  return (
    <div className="bottom-bar">
      <div css={[classes.section, classes.songInfo]}>
        <div css={classes.songImage}>{song.image}</div>
        <div css={classes.details}>
          <p css={classes.name}>{song.name}</p>
          <p css={classes.artists}>{song.artists.join(", ")}</p>
        </div>
        //! ADD TO FAVORITES
      </div>

      <div className="bottom-bar-section player">
        <div css={classes.buttons}>
          <button onClick={handlePrev}>
            <SkipPreviousIcon />
          </button>
          <button onClick={togglePlayPause}>
            {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
          </button>
          <button onClick={handleNext}>
            <SkipNextIcon />
          </button>
        </div>

        <div css={classes.progressBar}>
          <p>
            {formatTime((progress / 100) * totalDuration)}
          </p>

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
          src={song.audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>

      <div css={classes.section}></div>
    </div>
  );
};

export default BottomBar;
