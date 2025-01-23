/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  section: css`
    display: block;
    max-width: 100%;
    height: 20em;
  `,
  name: css`
    font-size: 1.65em;
    font-weight: 550;
    color: #aaa;
  `,
  playlists: css`
    display: flex;
    gap: 1em;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  playlist: css`
    box-sizing: border-box;
    width: 10em;
  `,
  imageContainer: css`
    position: relative;

    &:hover button {
      display: flex;
    }
  `,
  playlistImage: css`
    height: 10em !important;
    border-radius: 5px;
  `,
  button: css`
    box-sizing: border-box;
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    right: 30px;
    bottom: -3em;
  `,
  play: css`
    position: absolute;
    width: 2em !important;
    height: 2em !important;
    color: black;
    background-color: rgb(129, 4, 253);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 50em;
    padding: 2px;
    transition: scale 0.1s ease-in-out;

    &:hover {
      scale: 1.1;
    }
  `,
  details: css`
    box-sizing: border-box;
    height: 3em;
    overflow: hidden;

    p {
      box-sizing: border-box;
      text-overflow: ellipsis;
    }
  `,
};

export default classes;
