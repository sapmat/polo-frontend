/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Song } from "../../../../../Model/Song/songs";
import classes from "./style";
import SongPlaylistImage from "../../../../Util/SongPlaylistImage/SongPlaylistImage";

const TableRow = ({ index, songId }: { index: number; songId: string }) => {
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    // TODO API GET SONG
    setSong({
      name: "The Weekend Whip",
      artists: ["The Fold"],
      audioSrc: "/Audio/The Fold - The Weekend Whip (Official Audio).mp3",
      image: "",
      album: "LEGO NINJAGO: For the Spinners"
    });
  }, []);

  if (!song) return <></>;

  return (
    <tr css={classes.row}>
      <td css={classes.index}>{index + 1}</td>
      <td css={classes.title}><SongPlaylistImage item={song} cssclass={{}} /></td>
      <td css={classes.album}>{index}</td>
      <td css={classes.dateAdded}>{index}</td>
      <td css={classes.duration}>
        <IoTimeOutline />
      </td>
    </tr>
  );
};

export default TableRow;
