/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  topBar: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 10px 2em;
  `,

  threeDots: css`
    position: relative;

    button {
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

    ul {
      position: absolute;
      margin: 0;
      padding: 0 10px;
      border-radius: 10px;
      background-color: #333;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 200;
      width: 7.25em;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 100;
      cursor: pointer;
      width: 100%;
      height: 2em;
      z-index: 200;

      p {
        display: flex;
        align-items: center;
      }
    }
  `,

  center: css`
    display: flex;
    gap: 1em;
    height: 3em;
  `,

  homeButton: css`
    button {
      border: none;
      border-radius: 50%;
      height: 100%;
      aspect-ratio: 1 / 1;
      background-color: #333;
      transition: scale 0.1s ease;

      &:hover {
        scale: 1.1;
      }
    }
  `,

  searchBar: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #333;
    border-radius: 50em;
    padding: 0 10px;

    svg {
      opacity: 0.6;
      transition: opacity 0.075s ease;

      &:hover {
        opacity: 0.8;
      }
    }

    input {
      border: none;
      background-color: transparent;
      width: 20em;
      font-size: 1em;
    }
  `,
};

export default classes;
