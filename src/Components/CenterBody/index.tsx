/** @jsxImportSource @emotion/react */
import LeftBar from "./LeftBar";
import classes from "./style";

const CenterBody = () => {
  return (
    <div css={classes.centerBody}>
      <LeftBar />
      {/* router page (main page / current playlist / profile) */}
      {/* right bar (current song / queue) */}
    </div>
  );
};

export default CenterBody;
