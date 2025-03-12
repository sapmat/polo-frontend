/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  root: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;

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
    height: 3rem !important;
    min-width: 3rem !important;
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
  play: css`
    border-radius: 50rem;
    height: 1.75rem;
    width: 1.75rem;
    transition: scale 0.1s ease-in-out;
    fill: ${theme.colors['default'].svg.hover};

    &:hover {
      scale: 1.05;
    }
  `,
  name: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${theme.colors['default'].text.main};
  `,
  content: css`
    overflow: hidden;
  `,
  detailsBottom: css`
    box-sizing: border-box;
    display: flex;
    gap: 5px;
  `,
  artists: css`
    font-size: 1rem;
    font-weight: 200;
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
};

export default classes;
