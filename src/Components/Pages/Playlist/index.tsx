/** @jsxImportSource @emotion/react */
import { useParams } from "react-router";
import classes from "./style";
import { playlists } from "../../../data";
import PlaylistImage from "../../Util/PlaylistImage/PlaylistImage";

const PlaylistPage = () => {
  const params = useParams();
  const id: string = params.id || "";
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) return <></>;

  const formatDuration = (): string => {
    const h = Math.floor(playlist.duration / 60);
    const m = playlist.duration % 60;
    return `${h > 0 ? `${h} hr ` : ""}${m} min`;
  };

  const getSongDetails = () =>
    `• ${playlist.songs.length} song${
      playlist.songs.length > 1 ? "s" : ""
    }, ${formatDuration()}`;

  return (
    <div css={classes.page}>
      <div css={classes.header}>
        <PlaylistImage playlist={playlist} cssclass={classes.image} />
        <div css={classes.details}>
          <div>{`${playlist.isPrivate ? "Private" : "Public"} Playlist`}</div>
          <div css={classes.name}>{playlist.name}</div>
          <div css={classes.extra}>
            <div css={classes.creator}>
              <div>pfp</div>
              <div>{playlist.createdBy}</div>
            </div>
            <div css={classes.songsDetails}>{getSongDetails()}</div>
          </div>
        </div>
      </div>
      <div css={classes.content}>
        <PlaylistImage playlist={playlist} cssclass={classes.image} />
        <PlaylistImage playlist={playlist} cssclass={classes.image} />{" "}
        <PlaylistImage playlist={playlist} cssclass={classes.image} />
        <PlaylistImage playlist={playlist} cssclass={classes.image} />
      </div>
    </div>
  );
};

export default PlaylistPage;
