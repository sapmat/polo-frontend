/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  container: css`
    position: relative;
    width: 100%;
    max-width: 25rem;
  `,
  searchButton: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 100%;
    width: 3rem;

    svg {
      height: 1.8rem;
      width: 1.5rem;
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
    border-radius: 99999px;
    height: 100%;
    width: 100%;
    border: none;
    font-size: 1.2rem;
    text-indent: 2.5rem;
  `,
  eraseButton: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 100%;
    width: 4rem;
    bottom: 0;
    right: 0;

    svg {
      height: 1.8rem;
      transition: fill 0.1s ease-in-out;
      fill: ${theme.colors['default'].svg.default};

      &:hover {
        fill: ${theme.colors['default'].svg.hover};
      }
    }
  `,
};

export default classes;
