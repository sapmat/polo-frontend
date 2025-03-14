/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../../../theme';

const classes = {
  header: (isAtTop: boolean) => css`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns:
      3em minmax(120px, 6fr) minmax(120px, 4fr) minmax(120px, 3fr)
      150px;
    color: #b3b3b3;
    padding: ${isAtTop ? '10px' : '0'} 0 10px 0;
    border-bottom: rgb(109, 109, 109) solid 1px;
    ${isAtTop && `background-color: #222`}
  `,
  row: css`
    display: grid;
    grid-template-columns:
      3em minmax(120px, 6fr) minmax(120px, 4fr) minmax(120px, 3fr)
      150px;
    color: #b3b3b3;
    padding: 5px 0;
    width: 100%;
    border-radius: 5px;

    &:hover {
      background: rgba(179, 179, 179, 0.26);
    }
  `,
  index: (current: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    color: ${current ? theme.colors['default'].main.main : theme.colors['default'].text.secondary};
  `,
  play: css`
    height: 1rem;
    width: 1rem;
    fill: ${theme.colors['default'].svg.hover};
  `,
  title: css`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-right: 1rem;
  `,
  image: css`
    max-height: 2.5rem;
    width: 2.5rem;
    border-radius: 2px;
    color: white;
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  details: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  `,
  name: (current: boolean) => css`
    color: white;
    font-weight: 400;
    color: ${current ? theme.colors['default'].main.main : theme.colors['default'].text.main};
  `,
  artists: css`
    font-size: 1rem;
    font-weight: 200;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${theme.colors['default'].text.secondary};
  `,
  artist: css`
    &:hover {
      color: ${theme.colors['default'].text.main};
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  album: css`
    display: flex;
    align-items: center;
    padding-right: 1rem;
  `,
  dateAdded: css`
    display: flex;
    align-items: center;
    padding-right: 1rem;
  `,
  addToList: css`
    display: flex;
    align-items: center;
  `,
  right: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  duration: css`
    align-items: center;
  `,
};

export default classes;
