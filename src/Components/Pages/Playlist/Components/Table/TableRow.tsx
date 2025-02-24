/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Song } from "../../../../../Model/Song/songs";
import classes from "./style";
import { Playlist, PlaylistSong } from "../../../../../Model/Playlist/playlist";
import SongService from "../../../../../api/songs";
import ItemImage from "../../../../Util/ItemImage/ItemImage";
import PlayButton from "../../../../Util/Buttons/PlayButton/PlayButton";
import { useDispatch, useSelector } from "react-redux";
import useSong from "../../../../../Util/LocalStorage/useSong";
import usePlaylist from "../../../../../Util/LocalStorage/usePlaylist";
import { setPlaying, togglePlaying } from "../../../../../Store/songSlice";
import {
  findPlaylistPointer,
  shufflePlaylist,
} from "../../../../../Util/Functions/playlist.util";
import useShuffle from "../../../../../Util/LocalStorage/useShuffle";

const TableRow = ({
  index,
  playlistSong,
  playlist,
}: {
  index: number;
  playlistSong: PlaylistSong;
  playlist: Playlist;
}) => {
  const dispatch = useDispatch();
  const isPlaying: boolean = useSelector(
    (state: any) => state.playback.isPlaying
  );

  const [song, setSong] = useState<Song>();
  const [hovering, setHovering] = useState<boolean>(false);

  const { currentPlaylist, setCurrentPlaylist, setPlaylistPointer } =
    usePlaylist();
  const { currentSongId, updateCurrentSongId } = useSong();
  const { isShuffle } = useShuffle();

  useEffect(() => {
    SongService.getSongById(playlistSong.songId).then((song) => setSong(song));
  }, []);

  if (!song) return <></>;

  const handlePlay = () => {
    if (playlist.id === currentPlaylist?.id) {
      if (currentSongId !== playlistSong.songId) {
        const pointer: number = findPlaylistPointer(
          playlist,
          playlistSong.songId
        );
        updateCurrentSongId(playlistSong.songId);
        setPlaylistPointer(pointer);
      }
      dispatch(togglePlaying());
    } else {
      const pointer: number = findPlaylistPointer(
        playlist,
        playlistSong.songId
      );
      const newPlaylist: Playlist = isShuffle
        ? shufflePlaylist(playlist)
        : playlist;
      setCurrentPlaylist(newPlaylist, pointer);
      updateCurrentSongId(playlist.songs[0].songId);
      dispatch(setPlaying(true));
    }
  };

  const checkPlaying = (): boolean => {
    return currentPlaylist.id === playlist.id && isPlaying;
  };

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
          <PlayButton isPlaying={checkPlaying()} togglePlay={handlePlay} />
        ) : (
          <span>{index + 1}</span>
        )}
      </div>
      <div css={classes.title}>
        <ItemImage item={song} cssClass={classes.image} />
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
