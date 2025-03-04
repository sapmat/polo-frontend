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
    padding: 8px 2em;
  `,
  button: css`
    background: none;
    border: none;
    fontsize: 24px;
    cursor: pointer;
  `,
  left: css`
    display: flex;
    justify-content: left;
    width: 100%;
  `,
  center: css`
    display: flex;
    justify-content: center;
    gap: 1em;
    height: 90%;
    width: 100%;
  `,
  right: css`
    display: flex;
    justify-content: right;
    width: 100%;
  `,
  threeDots: css`
    position: relative;

    button {
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

    ul {
      position: absolute;
      margin: 0;
      padding: 0 10px;
      border-radius: 10px;
      background-color: #333;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 200;
      width: 7.25em;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 100;
      cursor: pointer;
      width: 100%;
      height: 2em;
      z-index: 200;

      p {
        display: flex;
        align-items: center;
      }
    }
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
      height: 1.5em;
      fill: ${isHome ? theme.colors['default'].svg.hover : theme.colors['default'].svg.default};
    }
  `,
};

export default classes;
