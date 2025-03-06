/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import ThreeDotOption from './ThreeDotOption/ThreeDotOption';
import classes from './style';

const ThreeDots = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {}, [])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // TODO MAKE FUNCTIONS WORK

  return (
    <div css={classes.root}>
      <svg onClick={toggleMenu} css={classes.threeDots(isOpen)} viewBox='0 0 24 24'>
        <path d='M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
      </svg>

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
