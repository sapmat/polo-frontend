/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import classes from './style';

const ScrollButton = ({ playlistsRef, show, isRight }: { playlistsRef: React.RefObject<HTMLElement>; show: boolean; isRight: boolean }) => {
  const [visible, setVisible] = useState(show);

  const handleScroll = () => {
    if (playlistsRef.current) {
      const element = playlistsRef.current;
      const scrollAmount = element.scrollWidth * 0.9;

      element.scrollTo({
        left: element.scrollLeft + (isRight ? scrollAmount : -scrollAmount),
        behavior: 'smooth',
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkVisibility = () => {
    if (playlistsRef.current) {
      const element = playlistsRef.current;

      setVisible(isRight ? element.scrollLeft + element.clientWidth < element.scrollWidth : element.scrollLeft > 0);
    }
  };

  useEffect(() => {
    const element = playlistsRef.current;
    if (element) {
      element.addEventListener('scroll', checkVisibility);
      checkVisibility();

      return () => {
        element.removeEventListener('scroll', checkVisibility);
      };
    }
  }, [playlistsRef, isRight]);

  return (
    visible && (
      <button css={classes.scrollButton(show, isRight)} onClick={handleScroll}>
        <svg
          viewBox='0 0 16 16'
          fill='white'
          style={{
            transform: isRight ? 'none' : 'rotate(180deg)',
          }}
        >
          <path d='M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z' />
        </svg>
      </button>
    )
  );
};

export default ScrollButton;
