/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../theme';

const classes = {
  topBar: css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 100vw;
    height: 7vh;
    padding: 8px 2rem;
  `,
  left: css`
    display: flex;
    justify-content: left;
    width: 100%;
  `,
  center: css`
    display: flex;
    justify-content: center;
    gap: 1rem;
    height: 90%;
    width: 100%;
  `,
  right: css`
    display: flex;
    justify-content: right;
    width: 100%;
  `,
  homeButton: (isHome: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    background-color: #333;
    transition: scale 0.1s ease;

    &:hover {
      scale: 1.1;

      svg {
        fill: ${theme.colors['default'].svg.hover};
      }
    }

    svg {
      height: 1.5rem;
      fill: ${isHome ? theme.colors['default'].svg.hover : theme.colors['default'].svg.default};
    }
  `,
};

export default classes;
