/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  leftBar: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: 15vw;
    min-width: 15em;
    max-height: 100%;
    overflow: hidden;
    padding: 10px;
    background-color: #111;
    border-radius: 10px;
    gap: 0.4em;
  `,
  openBarButton: css`
    display: flex;
    opacity: 0.8;
    font-size: large;

    p {
      font-weight: 600;
    }
  `,
  sidePlaylists: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: 100%;
    overflow: hidden;

    &:hover {
      overflow: auto;
    }

    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #444;
      opacity: 0.5;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #666;
      opacity: 0.5;
    }

    &::-webkit-scrollbar-thumb:active {
      background: #888;
      opacity: 0.5;
    }
  `,
  sidePlaylist: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 7.5vh;
    gap: 0.5em;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: #333;
      cursor: pointer;
    }
  `,
  sidePlaylistImage: css`
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    background-color: rebeccapurple;
  `,
  sidePlaylistContent: css`
    width: 70%;

    p {
      box-sizing: border-box;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  `,
  sidePlaylistBottom: css`
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

  sidePlaylistCreator: css`
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
};

export default classes;
