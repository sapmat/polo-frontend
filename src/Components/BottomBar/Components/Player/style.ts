/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  player: css`
    display: flex;
    flex-direction: column;
  `,
  buttons: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 2.2rem;
  `,
  button: css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  `,
  playButton: css`
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors['default'].buttons.none};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 50rem;
    padding: 0;
    height: 2rem;
    width: 2rem;

    &:hover {
      scale: 1.05;
    }
  `,
  play: css`
    box-sizing: border-box;
    fill: black;
    height: 1.25rem;
    width: 1.25rem;
    transition: scale 0.1s ease-in-out;
  `,
  skipButtons: css`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      height: 1.15rem;
      fill: ${theme.colors.default.svg.default};

      &:hover {
        scale: 1.05;
        fill: ${theme.colors.default.svg.hover};
      }

      transition: scale 0.05s ease-in-out, fill 0.05s ease-in-out;
    }
  `,
  progressBar: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;

    p {
      font-size: small;
      font-weight: 200;
      width: 2rem;
    }

    input {
      flex: 1;
      -webkit-appearance: none;
      width: 100%;
      height: 4px;
      background: linear-gradient(
        to right,
        #ccc 0%,
        #ccc calc(var(--progress) * 1%),
        #555 calc(var(--progress) * 1%),
        #555 100%
      );
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      transition: background 0.2s ease-in-out;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
      }

      &:hover {
        background: linear-gradient(
          to right,
          ${theme.colors['default'].main.dark} 0%,
          ${theme.colors['default'].main.dark} calc(var(--progress) * 1%),
          #555 calc(var(--progress) * 1%),
          #555 100%
        );

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 10px;
          width: 10px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  `,
};

export default classes;
