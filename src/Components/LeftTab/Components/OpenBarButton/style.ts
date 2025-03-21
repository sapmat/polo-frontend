/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  openBarButton: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 3.5rem;
    padding-left: 2px;
  `,
  button: (isOpen: boolean) => css`
    height: 3.5rem;
    min-width: 3.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 10px;
    opacity: 0.75;
    gap: 1rem;
    transition: opacity 0.15s ease-in-out;

    &:hover {
      opacity: 1;
    }

    svg {
      height: 60%;
      aspect-ratio: 1 / 1;
      width: auto;
      min-width: 3.5rem;
    }

    p {
      display: ${isOpen ? '' : 'none'};
      margin: 0;
      font-size: 1.35rem;
      font-weight: 500;
    }
  `,
};

export default classes;
