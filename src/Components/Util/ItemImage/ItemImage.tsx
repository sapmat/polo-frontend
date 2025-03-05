/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { Playlist } from '../../../Model/Playlist/playlist';
import { Song } from '../../../Model/Song/songs';
import { getDominantColor } from '../../../Util/Colors/GetDominantColor';
import classes from './style';
import { theme } from '../../../theme';

const ItemImage = ({
  item,
  cssClass,
  setDominantColor,
}: {
  item: Playlist | Song;
  cssClass?: Interpolation<Theme>;
  setDominantColor?: (v: string) => void;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (setDominantColor) {
      if (imageRef.current) {
        setDominantColor(getDominantColor(imageRef.current));
      } else {
        setDominantColor(theme.colors["default"].main.dark);
      }
    }
  }, [item]);

  const getImage = () =>
    item.name
      .split(' ')
      .map((word) => word.charAt(0))
      .slice(0, 3)
      .join('');

  return (
    <>
      {item.image ? <img ref={imageRef} css={[cssClass, classes.image]} src={item.image} /> : <div css={[cssClass, classes.image]}>{getImage()}</div>}
    </>
  );
};

export default ItemImage;
