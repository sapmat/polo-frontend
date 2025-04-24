/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  playlist: (isCurrentPlaylist: boolean) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 6rem;
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

    ${isCurrentPlaylist ?? `background-color: #333;`}
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
      scale: 1.1;
    }
  `,
  name: (isCurrentPlaylist: boolean) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${isCurrentPlaylist
      ? theme.colors['default'].main.main
      : theme.colors['default'].text.main};
  `,
  content: (open: boolean) => css`
    display: ${open ? '' : 'none'};
    overflow: hidden;
  `,
  detailsBottom: css`
    box-sizing: border-box;
    display: flex;
    gap: 5px;
  `,
  pin: (isPinned: boolean) => css`
    height: 1rem;
    min-width: 1rem;
    max-width: 1rem;
    display: ${isPinned ? '' : 'none'};

    svg {
      box-sizing: border-box;
      fill: ${theme.colors['default'].svg.selected};
    }
  `,
  createdBy: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${theme.colors['default'].text.secondary};
  `,
};

export default classes;
