/** @jsxImportSource @emotion/react */
import { Playlist } from "../../../../../Model/Playlist/playlist";
import PlaylistBanner from "./Components/PlaylistBanner/PlaylistBanner";
import classes from "./style";

const HomeSection = ({
  name,
  playlists,
}: {
  name: string;
  playlists: Playlist[];
}) => {
  return (
    <div css={classes.section}>
      <div css={classes.name}>{name}</div>
      <div css={classes.playlists}>
        {playlists.map((playlist) => (
          <PlaylistBanner playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
