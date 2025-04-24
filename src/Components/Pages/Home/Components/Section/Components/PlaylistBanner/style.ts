/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../../../../theme';

const classes = {
  playlist: css`
    box-sizing: border-box;
    width: 10rem;
    cursor: pointer;
  `,
  imageContainer: css`
    box-sizing: border-box;
    position: relative;

    &:hover button {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  playlistImage: css`
    height: 5em !important;
    border-radius: 5px;
    font-size: 2rem;
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  button: css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors['default'].buttons.main};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 99999px;
    height: 3rem;
    width: 3rem;
    transform: translateY(5px);

    position: absolute;
    right: 1rem;
    bottom: 1rem;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    opacity: 0;

    &:hover {
      scale: 1.05;
    }
  `,
  play: css`
    box-sizing: border-box;
    position: absolute;
    fill: black;
    height: 1.5rem;
    width: 1.5rem;
    transition: scale 0.1s ease-in-out;
  `,
  details: css`
    box-sizing: border-box;
    height: 3rem;

    p {
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};

export default classes;
