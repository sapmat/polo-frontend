/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { Playlist } from "../../../Model/Playlist/playlist";
import classes from "./style";

const PlaylistImage = ({
  playlist,
  cssclass,
}: {
  playlist: Playlist;
  cssclass: Interpolation<Theme>;
}) => {
  const getImage = () =>
    playlist.name
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 4)
      .join("");
  return (
    <>
      {playlist.image ? (
        <img css={[cssclass, classes.image]} src={playlist.image} />
      ) : (
        <div css={[cssclass, classes.image]}>{getImage()}</div>
      )}
    </>
  );
};

export default PlaylistImage;
