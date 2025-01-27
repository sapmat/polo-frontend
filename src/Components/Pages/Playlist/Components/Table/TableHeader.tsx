/** @jsxImportSource @emotion/react */
import { IoTimeOutline } from "react-icons/io5";
import classes from "./style";

const TableHeader = () => {
  return (
    <div css={classes.header}>
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
