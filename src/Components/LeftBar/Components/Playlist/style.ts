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
    padding: 5px;

    &:hover {
      background-color: #333;
      cursor: pointer;
    }
  `,
  imageContainer: css`
    position: relative;
    height: 3.5em !important;
    min-width: 3.5em !important;
    border-radius: 5px;
    overflow: hidden;
  `,
  image: css`
    background-color: rebeccapurple;
  `,
  imagePlay: (show: boolean) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.41);
    transition: opacity 0.05s ease-in-out;
    opacity: ${show ? "1" : "0"};
  `,
  sidePlaylistContent: (open: boolean) => css`
    display: ${open ? "" : "none"};
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
  createdBy: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  `,
};

export default classes;
