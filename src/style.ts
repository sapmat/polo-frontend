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
    height: 100%;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    gap: 0.5em;
  `,
};

export default classes;
