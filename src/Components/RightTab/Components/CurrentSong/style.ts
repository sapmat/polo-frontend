/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  root: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  top: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0 15px;
  `,
  playlistName: css`
    font-size: 1em;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  extra: css``,
  imageContainer: css`
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 15px;
  `,
  image: css`
    box-sizing: border-box;
    height: 100%;
    aspect-ratio: 1 / 1;

    &:hover {
      cursor: pointer;
    }
  `,
};

export default classes;
