/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  player: css`
    display: flex;
    flex-direction: column;
  `,
  buttons: css`
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  playButton: css`
    box-sizing: border-box;
    width: 1.4em !important;
    height: 1.4em !important;
    color: black;
    background-color: #ddd;
    border-radius: 50em;
    padding: 3px;
    transition: scale 0.1s ease-in-out;

    &:hover {
      scale: 1.05;
      background-color: #fff;
    }
  `,
  skipButtons: css`
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }

    svg {
      height: 1.5em;
      width: 1.5em;
    }
  `,
  shuffleButton: css`
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }

    svg {
      height: 1.6em;
      width: 1.5em;
    }
  `,
  loopButton: (isLoop: boolean) => css`
    path {
      fill: ${isLoop ? "red" : "#b3b3b3"};

      &:hover {
        color: white;
      }
    }

    svg {
      height: 1.4em;
      width: 1.5em;
    }
  `,
  progressBar: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    width: 100%;

    p {
      font-size: small;
      font-weight: 200;
    }

    input {
      flex: 1;
      -webkit-appearance: none;
      width: 100%;
      height: 4px;
      background: linear-gradient(
        to right,
        #ccc 0%,
        #ccc calc(var(--progress) * 1%),
        #555 calc(var(--progress) * 1%),
        #555 100%
      );
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      transition: background 0.2s ease-in-out;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
      }

      &:hover {
        background: linear-gradient(
          to right,
          #663399 0%,
          #663399 calc(var(--progress) * 1%),
          #555 calc(var(--progress) * 1%),
          #555 100%
        );

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 10px;
          width: 10px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  `,
};

export default classes;
