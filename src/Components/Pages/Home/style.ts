/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  container: css`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  `,
  home: css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    padding: 20px 0;
    background: linear-gradient(
      rgba(139, 139, 139, 0.2) 15%,
      rgba(112, 112, 112, 0.1) 25%,
      rgba(43, 43, 43, 0.4) 55%
    );

    border-radius: 10px;
    overflow-y: scroll;
  `,
};

export default classes;
