/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../../../../theme";

const classes = {
  volume: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    height: 100%;
    width: 90%;

    input {
      flex: 1;
      -webkit-appearance: none;
      width: 100%;
      height: 4px;
      background: linear-gradient(
        to right,
        #ccc 0%,
        #ccc calc(var(--volume) * 1%),
        #555 calc(var(--volume) * 1%),
        #555 100%
      );
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      transition: background 0.2s ease-in-out;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
      }

      &:hover {
        background: linear-gradient(
          to right,
          ${theme.colors["default"].main.dark} 0%,
          ${theme.colors["default"].main.dark} calc(var(--volume) * 1%),
          #555 calc(var(--volume) * 1%),
          #555 100%
        );

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 10px;
          width: 10px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }

    svg {
      height: 100%;
      width: 1em;
      fill: ${theme.colors["default"].svg.default};

      &:hover {
        fill: ${theme.colors["default"].svg.hover};
        cursor: pointer;
      }
    }
  `,
};

export default classes;
