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
};

export default classes;
