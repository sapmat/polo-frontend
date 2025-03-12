/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '../../../theme';

const classes = {
  general: css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
  `,
  page: css`
    position: relative;
    flex-grow: 1;
    overflow-y: scroll;
    border-radius: 10px;
    z-index: 0;
  `,
  bigBackground: css`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    min-height: 100%;
    flex-grow: 1;
    background: #121212;
    z-index: -2;
    border-radius: 10px;
  `,
  mainHeader: (opacity: number) => css`
    box-sizing: border-box;
    flex-direction: column;
    position: absolute;
    width: 100%;
    opacity: ${opacity};
    z-index: 10;
    transition: opacity 0.25s ease-in-out;
  `,
  headerPlay: (dominantColor: string) => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75em 1rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${dominantColor};
    gap: 0.5rem;
  `,
  headerName: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  playButton: css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors['default'].buttons.main};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
    border-radius: 50rem;
    height: 3.5rem;
    width: 3.5rem;

    &:hover {
      scale: 1.05;
      background-color: ${theme.colors['default'].buttons.hover};
    }
  `,
  play: css`
    fill: black;
    height: 2rem;
    width: 2rem;
    transition: scale 0.1s ease-in-out;
  `,
  shuffle: css`
    svg {
      height: 5rem;
      width: 5rem;
    }
  `,
  header: (dominantColor: string) => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 100%;
    height: 19rem;
    padding: 1.75rem;
    border-radius: 10px 10px 0 0;
    background-color: ${dominantColor};
    background-image: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%),
      url('/Images/noise.svg');
    overflow: hidden;
  `,
  image: css`
    border-radius: 5px;
    font-size: 4rem;
    height: 100%;
    aspect-ratio: 1 / 1;
  `,
  details: css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    height: 100%;
    max-width: 100%;
    overflow: hidden;
  `,
  name: css`
    box-sizing: border-box;
    font-size: 4.5rem;
    font-weight: 700;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  extra: css`
    display: flex;
    gap: 4px;
  `,
  creator: css`
    display: flex;
    gap: 4px;
  `,
  songsDetails: css`
    opacity: 0.6;
  `,
  content: css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 0 1.75rem;
  `,
  background: (dominantColor: string) => css`
    position: absolute;
    left: 0;
    height: 232px;
    z-index: -1;
    width: 100%;
    background-color: ${dominantColor};
    background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0%, #121212 100%), url('/Images/noise.svg');
  `,
  contentTop: css`
    display: flex;
    flex-direction: row;
    padding: 0.75em 0;
  `,
};

export default classes;
