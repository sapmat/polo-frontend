/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  root: css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    width: 100vw;
    height: 6rem;
  `,
  section: css`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  `,
};

export default classes;
