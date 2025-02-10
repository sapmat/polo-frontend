/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../../../theme";

const classes = {
  selectButton: (selected: boolean) => css`
      ${
        selected
          ? `path { fill: ${theme.colors["default"].buttons.selected}; }`
          : `path {
                fill: ${theme.colors["default"].buttons.default};
            }
            
            &:hover {
                path {
                    fill: ${theme.colors["default"].buttons.hover};
                }
            }
      `
      }
    }
  `,
};

export default classes;
