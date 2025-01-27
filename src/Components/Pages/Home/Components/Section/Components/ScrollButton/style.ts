/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  scrollButton: (show: boolean, isRight: boolean) => css`
    position: absolute;
    ${isRight ? "right: 30px;" : "left: 30px;"};
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 2.5em !important;
    height: 2.5em !important;
    background: #1f1f1f;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 50em;
    padding: 5px;
    transition: scale 0.1s ease-in-out, opacity 0.1s ease-in-out;
    opacity: ${show ? "1" : "0"};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: black;
    }

    svg {
      height: 0.9em;
      width: 0.9em;
    }
  `,
};

export default classes;
