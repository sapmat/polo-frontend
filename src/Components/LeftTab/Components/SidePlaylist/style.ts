/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  playlist: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 6em;
    gap: 0.5em;
    border-radius: 5px;
    padding: 5px;

    #play-button {
      opacity: 0;
    }

    &:hover {
      background-color: #333;
      cursor: pointer;

      #play-button {
        opacity: 1;
      }
    }
  `,
  imageContainer: css`
    position: relative;
    height: 3.5em !important;
    min-width: 3.5em !important;
    border-radius: 5px;
    overflow: hidden;
  `,
  image: css`
    background-color: rebeccapurple;
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  imagePlay: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.41);
    transition: opacity 0.05s ease-in-out;
  `,
  playButton: css`
    color: white;
    border-radius: 50em;
    height: 1.5em;
    width: 1.5em;
    padding: 12px;
    transition: scale 0.1s ease-in-out;
  `,
  sidePlaylistContent: (open: boolean) => css`
    display: ${open ? '' : 'none'};
    overflow: hidden;
  `,
  detailsBottom: css`
    box-sizing: border-box;
    display: flex;
    gap: 5px;
  `,
  pin: (isPinned: boolean) => css`
    scale: 0.8;
    rotate: 45deg;
    display: ${isPinned ? '' : 'none'};

    svg {
      box-sizing: border-box;
    }
  `,
  createdBy: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};

export default classes;
