/** @jsxImportSource @emotion/react */
import classes from './style';

interface OpenBarButtonProps {
  open: boolean;
  setOpen: () => void;
}

const OpenBarButton = ({ open, setOpen }: OpenBarButtonProps) => {
  return (
    <div css={classes.openBarButton}>
      <button css={classes.button(open)} onClick={setOpen}>
        <svg viewBox='0 0 24 24'>
          <path
            d={
              open
                ? 'M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z'
                : 'M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z'
            }
            fill='white'
          />
        </svg>
        <p>YOUR LIBRARY</p>
      </button>
      {/* <div>extra</div> */}
    </div>
  );
};

export default OpenBarButton;
