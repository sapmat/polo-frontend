/** @jsxImportSource @emotion/react */
import { Song } from "../../../../Model/Song/songs";
import classes from "./style";

const BottomSongDetails = ({ song }: { song: Song | undefined }) => {
  if (!song) return <></>;

  return (
    <div css={classes.info}>
      <div css={classes.image}>{song.image}</div>
      <div css={classes.details}>
        <p css={classes.name}>{song.name}</p>
        <p css={classes.artists}>{song.artists.join(", ")}</p>
      </div>
      //! ADD TO FAVORITES
    </div>
  );
};

export default BottomSongDetails;
