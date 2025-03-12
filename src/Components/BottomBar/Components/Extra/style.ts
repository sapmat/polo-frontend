/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../theme';

const classes = {
  root: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 20px 10px;
  `,
  element: (selected: boolean) => css`
    position: relative;
    height: 1rem;

    ${selected &&
    `
      &:after {
        background-color: #1db954;
        border-radius: 50%;
        bottom: 0;
        content: "";
        display: block;
        height: 4px;
        bottom: -10px;
        left: calc(50% - 1px);
        position: absolute;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 4px;
        inline-size: 4px !important;
      }`}
  `,
  svg: (selected: boolean) => css`
    height: 1rem;

    ${selected
      ? `fill: ${theme.colors.default.svg.selected};`
      : `
      fill: ${theme.colors.default.svg.default};

      &:hover { 
        fill: ${theme.colors.default.svg.hover};
      }`}

    &:hover {
      cursor: pointer;
    }
  `,
};

export default classes;
