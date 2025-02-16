/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Song } from "../../../../../Model/Song/songs";
import classes from "./style";
import SongPlaylistImage from "../../../../Util/SongPlaylistImage/SongPlaylistImage";
import { PlaylistSong } from "../../../../../Model/Playlist/playlist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SongService from "../../../../../api/songs";

const TableRow = ({
  index,
  playlistSong,
}: {
  index: number;
  playlistSong: PlaylistSong;
}) => {
  const [song, setSong] = useState<Song>();
  const [hovering, setHovering] = useState<boolean>(false);

  useEffect(() => {
    SongService.getSongById(playlistSong.songId).then((song) => setSong(song));
  }, []);

  if (!song) return <></>;

  const formatDate = () =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(playlistSong.dateAdded);

  return (
    <div
      css={classes.row}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <div css={classes.index}>
        {hovering ? (
          <PlayArrowIcon style={{ color: "white" }} />
        ) : (
          <span>{index + 1}</span>
        )}
      </div>
      <div css={classes.title}>
        <SongPlaylistImage item={song} cssClass={classes.image} />
      </div>
      <div css={classes.album}>{song.album}</div>
      <div css={classes.dateAdded}>{formatDate()}</div>
      <div css={classes.right}>
        <div css={classes.addToList}></div>
        <div css={classes.duration}>{song.duration}</div>
        <div></div>
      </div>
    </div>
  );
};

export default TableRow;
