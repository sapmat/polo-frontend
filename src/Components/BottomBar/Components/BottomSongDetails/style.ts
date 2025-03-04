/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  root: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 15px;
    height: 7vh;
    gap: 0.5em;
  `,
  image: css`
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  details: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  `,
  name: css`
    font-weight: 500;
  `,
  artists: css`
    font-weight: 200;
  `,
};

export default classes;
