import { useRef, useState, useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import "./style.css";
import { Song } from "../../Model/Song/songs";

const BottomBar = ({ song }: { song: Song }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

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

  useEffect(() => {
    handleLoadedMetadata();
  }, [song]);

  return (
    <div className="bottom-bar">
      <div className="song-info">
        <div className="song-image">{song.image}</div>
        <div className="details">
          <p className="name">{song.name}</p>
          <p className="artists">{song.artists.join(", ")}</p>
        </div>
        //! ADD TO FAVORITES
      </div>

      <div className="player">
        <div className="buttons">
          <button className="play-button" onClick={togglePlayPause}>
            {isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />}
          </button>
        </div>

        <div className="progress-bar">
          <p className="current-time">
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

          <p className="duration">{formatTime(totalDuration)}</p>
        </div>

        <audio
          ref={audioRef}
          src={song.audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>

      <div className="extra"></div>
    </div>
  );
};

export default BottomBar;
