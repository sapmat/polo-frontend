/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { Playlist } from "../../../Model/Playlist/playlist";
import classes from "./style";
import { Song } from "../../../Model/Song/songs";

const SongPlaylistImage = ({
  item,
  cssclass,
}: {
  item: Playlist | Song;
  cssclass: Interpolation<Theme>;
}) => {
  const getImage = () =>
    item.name
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 4)
      .join("");
  return (
    <>
      {item.image ? (
        <img css={[cssclass, classes.image]} src={item.image} />
      ) : (
        <div css={[cssclass, classes.image]}>{getImage()}</div>
      )}
    </>
  );
};

export default SongPlaylistImage;
