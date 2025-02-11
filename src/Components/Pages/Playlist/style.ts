/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  general: css`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    display: flex; /* Add this */
    flex-direction: column; /* Add this */
  `,
  page: css`
    position: relative;
    flex-grow: 1;
    height: 100%;
    overflow-y: scroll;
    border-radius: 10px;
    z-index: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  bigBackground: css`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    min-height: 100%;
    flex-grow: 1;
    background: #121212;
    z-index: -2;
    border-radius: 10px;
  `,
  mainHeader: (opacity: number) => css`
    box-sizing: border-box;
    flex-direction: column;
    position: absolute;
    width: 100%;
    opacity: ${opacity};
    z-index: 10;
    transition: opacity 0.25s ease-in-out;
  `,
  headerPlay: css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75em 1em;
    background: rgb(69, 32, 80);
    gap: 0.5em;
  `,
  headerName: css`
    font-size: 2em;
    font-weight: 700;
  `,
  playButton: css`
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
  play: css`
    color: black;
    background-color: rgb(162, 69, 255);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 50em;
    height: 1.5em;
    width: 1.5em;
    padding: 12px;
    transition: scale 0.1s ease-in-out;

    &:hover {
      scale: 1.05;
      background-color: rgb(187, 119, 255);
    }

  `,
  header: css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
    height: 19em;
    padding: 1.75em;
    border-radius: 10px 10px 0 0;
    background-color: rgb(62, 32, 80);
    background-image: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%),
      url("/Images/noise.svg");
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
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: calc(100% - 19em);
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 0 1.75em;
  `,
  background: css`
    position: absolute;
    left: 0;
    height: 232px;
    z-index: -1;
    width: 100%;
    background-color: rgb(66, 32, 80);
    background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0%, #121212 100%),
      url("/Images/noise.svg");
  `,
  contentTop: css`
    padding: 0.75em 0;
  `,
  contentPlayButton: css`
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
};

export default classes;
