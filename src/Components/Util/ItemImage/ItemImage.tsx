/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { Playlist } from "../../../Model/Playlist/playlist";
import classes from "./style";
import { Song } from "../../../Model/Song/songs";
import { useEffect, useRef } from "react";
import { getDominantColor } from "../../../Util/Colors/GetDominanteColor";

const ItemImage = ({
  item,
  cssClass,
}: {
  item: Playlist | Song;
  cssClass: Interpolation<Theme>;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Ensure the image is loaded before trying to get the dominant color
    if (imageRef.current) {
      const dominantColor: string = getDominantColor(imageRef.current);
    }
  }, []);

  const getImage = () =>
    item.name
      .split(" ")
      .map((word) => word.charAt(0))
      .slice(0, 4)
      .join("");

  return (
    <>
      {item.image ? (
        <img ref={imageRef} css={[cssClass, classes.image]} src={item.image} />
      ) : (
        <div css={[cssClass, classes.image]}>{getImage()}</div>
      )}
    </>
  );
};

export default ItemImage;
