/** @jsxImportSource @emotion/react */
import HomeIcon from "@mui/icons-material/Home";
import classes from "../../style";

const HomeButton = () => {
  return (
    <div css={classes.homeButton}>
      <button>
        <HomeIcon />
      </button>
    </div>
  );
};

export default HomeButton;
