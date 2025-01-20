/** @jsxImportSource @emotion/react */
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import ThreeDotOption from "./ThreeDotOption/ThreeDotOption";
import classes from "../../style";

const ThreeDots = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div css={classes.threeDots}>
      <button
        onClick={toggleMenu}
        style={{
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        <MoreHorizIcon />
      </button>

      {isOpen && (
        <ul>
          <ThreeDotOption title="Import song" />
          <ThreeDotOption title="Log out" />
        </ul>
      )}
    </div>
  );
};

export default ThreeDots;
