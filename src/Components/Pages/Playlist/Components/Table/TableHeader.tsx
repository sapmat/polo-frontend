/** @jsxImportSource @emotion/react */
import { IoTimeOutline } from "react-icons/io5";
import classes from "./style";
import { useEffect, useRef, useState } from "react";

const TableHeader = ({ top }: { top: number }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        // Check if TableHeader has reached the top of the viewport
        const rect = headerRef.current.getBoundingClientRect();
        console.log(rect.top);

        setIsAtTop(rect.top <= top);
      }

      headerRef.current?.addEventListener("scroll", handleScroll);
    };
    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);

  return (
    <div ref={headerRef} css={[classes.header(top), isAtTop && classes.atTop]}>
      <div css={classes.index}>#</div>
      <div css={classes.title}>Title</div>
      <div css={classes.album}>Album</div>
      <div css={classes.dateAdded}>Date added</div>
      <div css={classes.right}>
        <div css={classes.duration}>
          <IoTimeOutline />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
