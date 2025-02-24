/** @jsxImportSource @emotion/react */
import VolumeBar from "../VolumeBar/VolumeBar";
import classes from "./style";

const Extra = ({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
}) => {
  return (
    <div css={classes.extra}>
      <div css={classes.section}>//! view current song</div>

      <div css={classes.section}>//! view queue</div>

      <div css={classes.section}>
        <VolumeBar audioRef={audioRef} />
      </div>
    </div>
  );
};

export default Extra;
