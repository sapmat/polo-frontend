/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useDispatch, useSelector } from "react-redux";
import { togglePlaying } from "../../../../Store/songSlice";

const PlayButton = ({ cssClass }: { cssClass: Interpolation<Theme> }) => {
  const dispatch = useDispatch();
  const isPlaying: boolean = useSelector(
    (state: any) => state.playback.isPlaying
  );

  const togglePlay = () => {
    dispatch(togglePlaying());
  };

  return (
    <div onClick={togglePlay}>
      {isPlaying ? (
        <PlayArrowIcon css={cssClass} />
      ) : (
        <PauseIcon css={cssClass} />
      )}
    </div>
  );
};

export default PlayButton;
