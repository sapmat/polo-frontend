/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  app: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `,
  centerBody: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    gap: 1em;
  `,
};

export default classes;
