/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

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
  `,
  top: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 18px 16px;

    div {
      width: auto;
      display: flex;
      align-items: center;
    }
  `,
  content: css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 16px;
    height: 100%;
    width: 100%;
  `,
  playlistName: css`
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  extra: css`
    box-sizing: border-box;
    flex-direction: row;
    gap: 0.5rem;
  `,
  close: css`
    svg {
      border-radius: 50rem;
      padding: 0.5rem;
      height: 1rem;
      width: 1rem;
      fill: ${theme.colors['default'].svg.default};

      &:hover {
        fill: ${theme.colors['default'].svg.hover};
        background: #ffffff1a;
        cursor: pointer;
      }
    }
  `,
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
  songDetails: css``,
  songName: css`
    font-size: 1.3rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  songArtists: css`
    font-size: 1rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${theme.colors['default'].text.secondary};
  `,
  artist: css`
    &:hover {
      color: ${theme.colors['default'].text.main};
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  section: css`
    box-sizing: border-box;
    border-radius: 15px;
    padding: 0.5rem;
    background-color: #1f1f1f;
    width: 100%;
  `,
  aboutArtist: css`
    cursor: pointer;
  `,
  credits: css``,
  nextInQueue: css``,
  sectionTop: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.9rem;
    padding: 0.5rem;
  `,
  sectionName: css`
    font-weight: 700;
    color: ${theme.colors['default'].text.main};
  `,
  sectionExtra: css`
    font-weight: 700;
    color: ${theme.colors['default'].text.secondary};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      scale: 1.05;
      color: ${theme.colors['default'].text.main};
      transition: scale 0.05s ease-in-out;
    }
  `,
};

export default classes;
