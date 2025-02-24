/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { Song } from "../../Model/Song/songs";
import classes from "./style";
import Player from "./Components/Player/Player";
import BottomSongDetails from "./Components/BottomSongDetails/BottomSongDetails";
import { useEffect, useRef, useState } from "react";
import SongService from "../../api/songs";
import useSong from "../../Util/LocalStorage/useSong";
import VolumeBar from "./Components/VolumeBar/VolumeBar";
import Extra from "./Components/Extra/Extra";

const BottomBar = () => {
  const { currentSongId } = useSong();
  const [currentSong, setCurrentSong] = useState<Song>();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    SongService.getSongById(currentSongId || "").then((res) => {
      setCurrentSong(res);
    });
  }, [currentSongId]);

  return (
    <div css={classes.bottomBar}>
      <div css={classes.section}>
        <BottomSongDetails song={currentSong} />
      </div>

      <div css={[classes.section]}>
        <Player song={currentSong} audioRef={audioRef} />
      </div>

      <div css={classes.section}>
        <Extra audioRef={audioRef} />
      </div>
    </div>
  );
};

export default BottomBar;
