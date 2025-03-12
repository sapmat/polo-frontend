/** @jsxImportSource @emotion/react */
import { RightTabOption } from '../../../../Util/Enums/RightTabOption';
import VolumeBar from '../VolumeBar/VolumeBar';
import classes from './style';

interface ExtraProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  rightTab: RightTabOption;
  setRightTab: (d: RightTabOption) => void;
}

const Extra = ({ audioRef, rightTab, setRightTab }: ExtraProps) => {
  return (
    <div css={classes.root}>
      <div css={classes.element(rightTab === RightTabOption.CURRENT_SONG)}>
        <svg
          viewBox='0 0 16 16'
          css={classes.svg(rightTab === RightTabOption.CURRENT_SONG)}
          onClick={() => {
            rightTab === RightTabOption.CURRENT_SONG ? setRightTab(RightTabOption.NONE) : setRightTab(RightTabOption.CURRENT_SONG);
          }}
        >
          <path d='M11.196 8 6 5v6l5.196-3z' />
          <path d='M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z' />
        </svg>
      </div>

      <div css={classes.element(rightTab === RightTabOption.QUEUE)}>// TODO VIEW QUEUE </div>

      <div css={classes.element(false)}>
        <VolumeBar audioRef={audioRef} />
      </div>
    </div>
  );
};

export default Extra;
