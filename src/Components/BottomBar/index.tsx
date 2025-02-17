/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { Song } from "../../Model/Song/songs";
import classes from "./style";
import Player from "./Components/Player/Player";
import BottomSongDetails from "./Components/BottomSongDetails/BottomSongDetails";
import { useEffect, useState } from "react";
import SongService from "../../api/songs";
import useSong from "../../Util/LocalStorage/useSong";

const BottomBar = () => {
  const { currentSongId } = useSong();
  const [currentSong, setCurrentSong] = useState<Song>();

  useEffect(() => {
    console.log("hi", currentSongId);

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
        <Player song={currentSong} />
      </div>

      <div css={classes.section}>
        //! view current song
        //! view queue
        //! volume
      </div>
    </div>
  );
};

export default BottomBar;
