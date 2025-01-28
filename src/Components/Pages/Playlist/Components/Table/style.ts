/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const classes = {
  header: (top: number) => css`
    width: 100%;
    display: grid;
    grid-template-columns:
      3em minmax(120px, 6fr) minmax(120px, 4fr) minmax(120px, 3fr)
      150px;
    color: #b3b3b3;
    padding-bottom: 10px;
    border-bottom: rgb(109, 109, 109) solid 1px;
    position: sticky;
    top: ${top}px;
    z-index: 10;
  `,
  atTop: css`
    background: white;
  `,
  row: css`
    display: grid;
    grid-template-columns:
      3em minmax(120px, 6fr) minmax(120px, 4fr) minmax(120px, 3fr)
      150px;
    color: #b3b3b3;
    padding: 10px 0;
    width: 100%;
    border-radius: 5px;

    &:hover {
      background: rgba(179, 179, 179, 0.26);
    }
  `,
  index: css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
  `,
  title: css`
    display: flex;
    align-items: center;
  `,
  image: css`
    height: 1em;
    border-radius: 2px;
    color: white;
  `,
  album: css`
    display: flex;
    align-items: center;
  `,
  dateAdded: css`
    display: flex;
    align-items: center;
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
