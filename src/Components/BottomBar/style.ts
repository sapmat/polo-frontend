/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  bottomBar: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 8vh;
  `,
  section: css`
    flex: 1;
  `,
  songInfo: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 5px 15px;
    height: 7vh;
    gap: 0.5em;
  `,
  songImage: css`
    background-color: #663399;
    height: 80%;
    aspect-ratio: 1 / 1;
  `,
  details: css`
    height: 4vh;
  `,
  name: css`
    font-weight: 500;
  `,
  artists: css`
    font-weight: 200;
  `,
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

      svg {
        height: 1.75em;
        width: 1.75em;
      }
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
