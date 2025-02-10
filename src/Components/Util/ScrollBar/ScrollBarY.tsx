/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

const ScrollBarY = ({
  width,
  generalHover,
  maxHeight,
  scrollableElementRef,
}: {
  width: number;
  generalHover: boolean;
  maxHeight: number;
  scrollableElementRef: React.RefObject<HTMLElement>;
}) => {
  const [thumbHeight, setThumbHeight] = useState(maxHeight);
  const [thumbPosition, setThumbPosition] = useState(80);
  const [isDragging, setIsDragging] = useState(false);
  const [cssClass, setcssClass] = useState({
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
    setcssClass({
      general: css`
        box-sizing: border-box;
        position: absolute;
        right: 0px;
        height: 100%;
        z-index: 999;
        overflow: hidden;
        padding-top: ${thumbPosition}px;
      `,
      track: css``,
      thumb: css`
        box-sizing: border-box;
        width: ${width}px;
        height: ${thumbHeight}px;
        background-clip: border-box;
        background: #666;
        opacity: 0.5;
        transition: background 0.3s, opacity 0.3s;
        cursor: ${isDragging ? "grabbing" : "pointer"};

        ${generalHover
          ? ` 
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
          `
          : `display: none;`}
      `,
    });
  }, [generalHover, isDragging, thumbHeight, thumbPosition, width]);

  const handleMouseDown = () => {
    setIsDragging(true);
    document.body.style.cursor = "grabbing";
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && scrollableElementRef.current) {
      const { clientHeight, scrollHeight } = scrollableElementRef.current;
      const deltaY = e.movementY;
      const newThumbPosition = thumbPosition + deltaY;

      if (
        newThumbPosition >= 0 &&
        newThumbPosition <= maxHeight - thumbHeight
      ) {
        setThumbPosition(newThumbPosition);

        const scrollTop =
          (newThumbPosition / (maxHeight - thumbHeight)) *
          (scrollHeight - clientHeight);
        scrollableElementRef.current.scrollTop = scrollTop;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "auto";
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    isDragging,
    thumbPosition,
    maxHeight,
    thumbHeight,
    scrollableElementRef,
    handleMouseMove,
  ]);

  return (
    <div css={cssClass.general}>
      <div css={cssClass.track}>
        <div css={cssClass.thumb} onMouseDown={handleMouseDown} />
      </div>
    </div>
  );
};

export default ScrollBarY;
