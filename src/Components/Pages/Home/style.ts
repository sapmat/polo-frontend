/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  home: css`
    display: flex;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
    flex-grow: 1;
    padding: 20px 40px;
    background: linear-gradient(
      rgba(75, 8, 64, 0.4) 15%,
      rgba(33, 2, 39, 0.4) 25%,
      rgba(43, 43, 43, 0.4) 55%
    );
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: scroll;

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
};

export default classes;
