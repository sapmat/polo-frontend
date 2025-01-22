/** @jsxImportSource @emotion/react */
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import classes from "../../style";

const OpenBarButton = () => {
  return (
    <div css={classes.openBarButton}>
      <button>
        <AutoAwesomeMotionIcon />
      </button>
      <p>YOUR LIBRARY</p>
    </div>
  );
};

export default OpenBarButton;
