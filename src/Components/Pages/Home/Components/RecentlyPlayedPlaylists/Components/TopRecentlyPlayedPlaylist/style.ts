/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  playlists: css`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 1rem;
    padding: 0 30px;

    @media (max-width: calc(20em * 4)) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, auto);
    }
  `,
  playlist: css`
    position: relative;
    display: flex;
    text-align: center;
    font-size: 1rem;
    border-radius: 5px;
    height: 5em;
    background: rgba(77, 77, 77, 0.4);
    cursor: pointer;

    &:hover {
      background: rgba(77, 77, 77, 0.6);

      button {
        display: flex;
      }
    }
  `,
  image: css`
    border-radius: 5px 0 0 5px;
    font-size: 1.75em;
  `,
  name: css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-grow: 1;
    border-radius: 0 5px 5px 0;
    padding-left: 10px;
  `,
  button: css`
    box-sizing: border-box;
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    right: 0px;
  `,
  play: css`
    position: absolute;
    width: 1.5em !important;
    height: 1.5em !important;
    color: black;
    background-color: rgb(162, 69, 255);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 50em;
    padding: 5px;
    transition: scale 0.1s ease-in-out;

    &:hover {
      scale: 1.1;
    }
  `,
};

export default classes;
