/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  page: css`
    position: relative;
    flex-grow: 1;
    height: 100%;
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
  header: css`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
    height: 19em;
    padding: 1.5em;
    border-radius: 10px 10px 0 0;
    background: rgb(36, 2, 30);
  `,
  image: css`
    border-radius: 5px;
    font-size: 4em;
  `,
  details: css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    height: 100%;
  `,
  name: css`
    font-size: 4.5em;
    font-weight: 700;
  `,
  extra: css`
    display: flex;
    gap: 4px;
  `,
  creator: css`
    display: flex;
    gap: 4px;
  `,
  songsDetails: css`
    opacity: 0.6;
  `,
  content: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: calc(100% - 19em);
    width: 100%;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(
      rgba(56, 5, 48, 0.4) 10%,
      rgba(33, 2, 39, 0.4) 20%,
      rgba(43, 43, 43, 0.4) 55%
    );
  `,
};

export default classes;
