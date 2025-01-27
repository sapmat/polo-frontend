/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  leftBar: (open: boolean) => css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: ${open ? "18vw" : ""};
    min-width: ${open ? "15em" : "5em"};
    max-height: 100%;
    overflow: hidden;
    padding: 10px;
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
    gap: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

export default classes;
