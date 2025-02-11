/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import classes from "./style";
import { Song } from "../../../../Model/Song/songs";
import { useMovePointer } from "../../../../Util/LocalStorage/util";
import PlayButton from "../../../Util/Buttons/PlayButton/PlayButton";
import { useSelector } from "react-redux";
import ShuffleButton from "../../../Util/Buttons/ShuffleButton/ShuffleButton";
import LoopButton from "../../../Util/Buttons/LoopButton/LoopButton";

const Player = ({ song }: { song: Song | null }) => {
  const [progress, setProgress] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const isPlaying: boolean = useSelector(
    (state: any) => state.playback.isPlaying
  );
  const { movePlaybackPointer } = useMovePointer();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    handleLoadedMetadata();
  }, [song]);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setProgress(0);
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

  return (
    <div css={classes.player}>
      <div css={classes.buttons}>
        <ShuffleButton cssClass={classes.shuffleButton} />
        <button css={classes.skipButtons} onClick={handlePrev}>
          <svg>
            <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" />
          </svg>
        </button>
        <button>
          <PlayButton cssClass={classes.playButton} />
        </button>
        <button
          css={classes.skipButtons}
          onClick={() => {
            handleNext();
          }}
        >
          <svg>
            <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" />
          </svg>
        </button>
        <LoopButton cssClass={classes.loopButton} />
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
