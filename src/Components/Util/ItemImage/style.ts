/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../theme';

const classes = {
  image: css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.62), rgba(138, 138, 138, 0.5)), ${theme.colors['default'].main.dark}};
  `,
};

export default classes;
