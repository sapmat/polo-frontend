/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  container: css`
    position: relative;
    width: 100%;
    max-width: 25em;
  `,
  button: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 100%;
    width: 4em;

    svg {
      height: 2em;
      transition: fill 0.1s ease-in-out;
      fill: ${theme.colors['default'].svg.default};

      &:hover {
        fill: ${theme.colors['default'].svg.hover};
      }
    }
  `,
  searchBar: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #333;
    border-radius: 50em;
    height: 100%;
    width: 100%;
    border: none;
    font-size: 1.2em;
    text-indent: 2.2em;
  `,
};

export default classes;
