/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  root: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    height: 7vh;
    gap: 0.5rem;
  `,
  image: css`
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  details: css`
    max-width: 100%;
    overflow: hidden;
  `,
  name: css`
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${theme.colors['default'].text.main};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  artists: css`
    font-size: 0.9em;
    font-weight: 400;
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
