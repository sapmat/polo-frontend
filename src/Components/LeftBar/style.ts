/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  leftBar: (open: boolean) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: ${open ? "17vw" : ""};
    min-width: ${open ? "15em" : ""};
    max-height: 100%;
    overflow: hidden;
    padding: 10px 0 10px 10px;
    background-color: #111;
    border-radius: 10px;
    gap: 0.1em;
  `,
  sidePlaylists: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: scroll;
    overflow-x: hidden;
    gap: 10px;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &:hover&::-webkit-scrollbar-thumb {
      background: #444;
      opacity: 0.5;
    }

    &::-webkit-scrollbar-thumb {
      &:hover {
        background: #666;
        opacity: 0.5;
      }

      &:active {
        background: #888;
        opacity: 0.5;
      }
    }
  `,
  sidePlaylist: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 6em;
    gap: 0.5em;
    border-radius: 5px;

    &:hover {
      background-color: #333;
      cursor: pointer;
    }
  `,
  sidePlaylistImage: css`
    height: 3.5em !important;
    min-width: 3.5em !important;
    border-radius: 5px;
    background-color: rebeccapurple;
  `,
  sidePlaylistContent: (open: boolean) => css`
    display: ${open ? "" : "none"};

    p {
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  sidePlaylistBottom: css`
    box-sizing: border-box;
    display: flex;
    gap: 5px;
  `,

  pin: css`
    scale: 0.8;
    rotate: 45deg;

    svg {
      box-sizing: border-box;
    }
  `,
};

export default classes;
