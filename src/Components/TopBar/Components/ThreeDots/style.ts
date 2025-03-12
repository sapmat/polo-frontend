/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  root: css`
    position: relative;

    ul {
      position: absolute;
      margin: 0;
      padding: 0 10px;
      border-radius: 10px;
      background-color: #333;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 200;
      width: 7.25rem;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 100;
      cursor: pointer;
      width: 100%;
      height: 2rem;
      z-index: 200;

      p {
        display: flex;
        align-items: center;
      }
  `,
  threeDots: (open: boolean) => css`
    cursor: pointer;
    height: 2rem;
    fill: ${open ? theme.colors['default'].svg.default : theme.colors['default'].svg.hover};
  `,
};

export default classes;
