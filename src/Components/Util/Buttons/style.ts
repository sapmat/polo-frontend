/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../../../theme";

const classes = {
  selectButton: (selected: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${selected
      ? `
      &:before {
        position: absolute;
          background-color: ${theme.colors["default"].buttons.selected};
          border-radius: 50%;
          bottom: 4px;
          content: "";
          display: block;
          width: 4px;
          inline-size: 4px;
          height: 4px;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
      }
        
      path { fill: ${theme.colors["default"].buttons.selected}; }`
      : `path {
                fill: ${theme.colors["default"].svg.default};
            }
            
            &:hover {
                path {
                    fill: ${theme.colors["default"].buttons.hover};
                }
            }
      `}
  `,
};

export default classes;
