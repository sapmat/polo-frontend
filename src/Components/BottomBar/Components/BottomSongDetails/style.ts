/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  info: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 5px 15px;
    height: 7vh;
    gap: 0.5em;
  `,
  image: css`
    background-color: #663399;
    height: 80%;
    aspect-ratio: 1 / 1;
  `,
  details: css`
    height: 4vh;
  `,
  name: css`
    font-weight: 500;
  `,
  artists: css`
    font-weight: 200;
  `,
};

export default classes;
