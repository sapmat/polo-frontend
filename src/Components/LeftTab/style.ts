/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  root: (open: boolean) => css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: ${open ? '22vw' : ''};
    min-width: ${open ? '22vw' : '5em'};
    max-height: 100%;
    overflow: hidden;
    padding: 10px 10px 0 10px;
    background-color: #111;
    border-radius: 10px;
    gap: 0.1em;
  `,
  playlists: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

export default classes;
