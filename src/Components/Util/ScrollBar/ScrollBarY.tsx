/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

const ScrollBarY = ({
  generalHover,
  maxHeight,
  scrollableElementRef,
}: {
  generalHover: boolean;
  maxHeight: number;
  scrollableElementRef: React.RefObject<HTMLElement>;
}) => {
  const [thumbHeight, setThumbHeight] = useState(maxHeight);
  const [thumbPosition, setThumbPosition] = useState(80);
  const [cssClass, setCssClass] = useState({
    general: css``,
    track: css``,
    thumb: css``,
  });

  useEffect(() => {
    if (scrollableElementRef.current) {
      const { clientHeight, scrollHeight } = scrollableElementRef.current;
      setThumbHeight((clientHeight / scrollHeight) * maxHeight);
    }
  }, [maxHeight, scrollableElementRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableElementRef.current) {
        const { scrollTop, clientHeight, scrollHeight } =
          scrollableElementRef.current;
        const thumbPosition =
          (maxHeight - thumbHeight) *
          (scrollTop / (scrollHeight - clientHeight));

        setThumbPosition(thumbPosition);
      }
    };

    const element = scrollableElementRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [maxHeight, scrollableElementRef, thumbHeight]);

  useEffect(() => {
    setCssClass({
      general: css`
        box-sizing: border-box;
        position: absolute;
        right: 0px;
        height: 100%;
        z-index: 999;
        border-radius: 0 10px 10px 0;
        overflow: hidden;
        padding-top: ${thumbPosition}px;
      `,
      track: css``,
      thumb: css`
        box-sizing: border-box;
        width: 25px;
        height: ${thumbHeight}px;
        background-clip: border-box;
        background: #666;
        opacity: 0.5;
        transition: background 0.3s, opacity 0.3s;

        ${generalHover &&
        `
            display: flex;
            background: #666;
            opacity: 0.5;
            
            &:hover {
              background: #888;
              opacity: 0.5;
            }
    
            &:active {
              background: #aaa;
              opacity: 0.5;
            }
          `}
      `,
    });
  }, [generalHover, thumbHeight, thumbPosition]);

  return (
    <div css={cssClass.general}>
      <div css={cssClass.track}>
        <div css={cssClass.thumb} />
      </div>
    </div>
  );
};

export default ScrollBarY;
