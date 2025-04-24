/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  button: css`
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid #c7c7c7;
    border-radius: 99999px;
    padding: 0.2rem 0.5rem;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      opacity: 0.5;
    }
  `,
};

export default classes;
