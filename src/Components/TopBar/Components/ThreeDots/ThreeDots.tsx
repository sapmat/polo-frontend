/** @jsxImportSource @emotion/react */
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import classes from '../../style';
import ThreeDotOption from './ThreeDotOption/ThreeDotOption';

const ThreeDots = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div css={classes.threeDots}>
      <button
        onClick={toggleMenu}
        css={classes.button}
      >
        <MoreHorizIcon />
      </button>

      {isOpen && (
        <ul>
          <ThreeDotOption title='Import song' />
          <ThreeDotOption title='Log out' />
        </ul>
      )}
    </div>
  );
};

export default ThreeDots;
