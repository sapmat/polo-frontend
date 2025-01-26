/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  playlist: css`
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
  image: css`
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
  detailsBottom: css`
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
