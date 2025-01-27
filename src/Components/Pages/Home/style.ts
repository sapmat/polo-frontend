/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
    gap: 2em;
    height: 100%;
    padding: 20px 0;
    background: linear-gradient(
      rgba(75, 8, 64, 0.4) 15%,
      rgba(33, 2, 39, 0.4) 25%,
      rgba(43, 43, 43, 0.4) 55%
    );
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

export default classes;
