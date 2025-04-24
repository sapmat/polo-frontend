/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const classes = {
  root: css`
    * {
      &::-webkit-scrollbar {
        display: none;
      }
    }

    :root {
      box-sizing: border-box;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;

      color-scheme: light dark;
      background-color: black;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      user-select: none;
    }

    body {
      margin: 0;
      display: flex;
      place-items: center;
      width: 100vw;
      height: 100vh;
    }

    p {
      padding: 0;
      margin: 0;
    }

    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
  `,
  app: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    max-height: 100vh;
  `,
  centerBody: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    height: 86vh;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    gap: 0.5rem;
  `,
};

export default classes;
