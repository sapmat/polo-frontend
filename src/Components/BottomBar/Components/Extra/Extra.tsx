/** @jsxImportSource @emotion/react */
import VolumeBar from '../VolumeBar/VolumeBar';
import classes from './style';

interface ExtraProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Extra = ({ audioRef }: ExtraProps) => {
  return (
    <div css={classes.root}>
      <div css={classes.section}>// TODO VIEW CURRENT SONG </div>

      <div css={classes.section}>// TODO VIEW QUEUE </div>

      <div css={classes.section}>
        <VolumeBar audioRef={audioRef} />
      </div>
    </div>
  );
};

export default Extra;
