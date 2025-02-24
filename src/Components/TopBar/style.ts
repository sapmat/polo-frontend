/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  topBar: css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 100vw;
    height: 5em;
    padding: 8px 2em;
  `,
  left: css`
    display: flex;
    justify-content: left;
    width: 100%;
  `,
  center: css`
    display: flex;
    justify-content: center;
    gap: 1em;
    height: 90%;
    width: 100%;
  `,
  right: css`
    display: flex;
    justify-content: right;
    width: 100%;
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
  homeButton: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    background-color: #333;
    transition: scale 0.1s ease;

    &:hover {
      scale: 1.1;
    }

    svg {
      height: 1.28em;
      width: 1.5em;
      fill: white;
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
