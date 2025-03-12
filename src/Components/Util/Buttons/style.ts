/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../theme';

const classes = {
  selectButton: (selected: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;

    &:hover {
      scale: 1.1;
      transition: scale 0.05s ease-in-out, fill 0.05s ease-in-out;
    }

    ${selected
      ? `
      &:before {
        position: absolute;
        background-color: ${theme.colors['default'].svg.selected};
        border-radius: 50%;
        bottom: -0.5rem;
        content: "";
        display: block;
        width: 0.25rem;
        inline-size: 0.25rem;
        height: 0.25rem;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
        
      path { fill: ${theme.colors['default'].svg.selected}; }`
      : `path {
                fill: ${theme.colors['default'].svg.default};
            }
            
            &:hover {
                path {
                    fill: ${theme.colors['default'].svg.hover};
                }
            }
      `}

    svg {
      height: 1.15rem;
      width: 1.15rem;
    }
  `,
};

export default classes;
