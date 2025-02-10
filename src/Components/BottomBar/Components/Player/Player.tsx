/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { PiShuffleBold } from "react-icons/pi";
import { SlLoop } from "react-icons/sl";
import classes from "./style";
import { Song } from "../../../../Model/Song/songs";
import { useMovePointer } from "../../../../Util/LocalStorage/util";
import PlayButton from "../../../Util/PlayButton/PlayButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoop, toggleShuffle } from "../../../../Store/songSlice";

const Player = ({ song }: { song: Song | null }) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const isPlaying: boolean = useSelector(
    (state: any) => state.playback.isPlaying
  );
  const isShuffle: boolean = useSelector(
    (state: any) => state.playback.isShuffle
  );
  const isLoop: boolean = useSelector((state: any) => state.playback.isLoop);

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

  const handleShuffle = () => {
    dispatch(toggleShuffle());
  };

  const handleLoop = () => {
    dispatch(toggleLoop());
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
        <button>
          <PlayButton cssClass={classes.playButton} />
        </button>
        <button
          css={classes.skipButtons}
          onClick={() => {
            handleNext();
          }}
        >
          <SkipNextIcon />
        </button>
        <button
          css={classes.loopButton(isLoop)}
          onClick={() => {
            handleLoop();
          }}
        >
          <svg>
            <path
              d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
            />
          </svg>
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
