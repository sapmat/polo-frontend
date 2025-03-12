/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../../../../theme';

const classes = {
  playlists: css`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 1rem;
    padding: 0 40px;

    @media (max-width: calc(20em * 4)) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, auto);
    }
  `,
  playlist: css`
    position: relative;
    display: flex;
    text-align: center;
    font-size: 1rem;
    border-radius: 5px;
    height: 4rem;
    background: rgba(77, 77, 77, 0.4);
    cursor: pointer;

    &:hover {
      background: rgba(77, 77, 77, 0.6);

      button {
        opacity: 1;
      }
    }
  `,
  image: css`
    border-radius: 5px 0 0 5px;
    font-size: 1.75rem;
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  name: css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-grow: 1;
    border-radius: 0 5px 5px 0;
    padding-left: 10px;
    font-weight: 600;
  `,
  button: css`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors['default'].buttons.main};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    opacity: 0;
    border-radius: 50rem;
    height: 2.5rem;
    width: 2.5rem;
    right: -10px;
    top: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      scale: 1.05;
      background-color: ${theme.colors['default'].buttons.hover};
    }
  `,
  play: css`
    box-sizing: border-box;
    fill: black;
    height: 1.5rem;
    width: 1.5rem;
    transition: scale 0.1s ease-in-out;
  `,
};

export default classes;
