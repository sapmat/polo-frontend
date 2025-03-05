/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../../theme';

const classes = {
  section: css`
    display: block;
    height: 20em;
  `,
  name: css`
    font-size: 1.65em;
    font-weight: 550;
    color: #aaa;
    padding: 0 30px;
  `,
  space: css`
    min-width: calc(30px - 1em);
    content: '';
  `,
  playlistsContainer: css`
    position: relative;
    display: flex;
    gap: 1em;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      width: 30px;
      background: linear-gradient(90deg, hsla(0, 0%, 7%, 0.7) 0%, transparent 100%);
      inset-inline-start: 0;
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      width: 30px;
      background: linear-gradient(-90deg, hsla(0, 0%, 7%, 0.7) 0%, transparent 100%);
      inset-inline-end: 0;
      pointer-events: none;
    }
  `,
  playlists: css`
    position: relative;
    display: flex;
    gap: 1em;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  playlist: css`
    box-sizing: border-box;
    width: 10em;
    cursor: pointer;
  `,
  imageContainer: css`
    box-sizing: border-box;
    position: relative;

    &:hover button {
      opacity: 1;
    }
  `,
  playlistImage: css`
    height: 5em !important;
    border-radius: 5px;
    font-size: 2em;
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  button: css`
    box-sizing: border-box;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: opacity 0.1s ease-in-out;
    opacity: 0;

    div {
      box-sizing: border-box;
      display: flex;
      justify-content: end;
      align-items: end;
      padding: 1em;
    }
  `,
  play: css`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 1.5em !important;
    height: 1.5em !important;
    color: black;
    background-color: ${theme.colors['default'].main.main};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 50em;
    padding: 5px;
    transition: scale 0.1s ease-in-out;

    &:hover {
      scale: 1.1;
    }
  `,
  details: css`
    box-sizing: border-box;
    height: 3em;
    
    p {
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `,
};

export default classes;
