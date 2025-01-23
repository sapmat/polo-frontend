/** @jsxImportSource @emotion/react */
import HomeIcon from "@mui/icons-material/Home";
import classes from "../../style";
import { useNavigate } from "react-router";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <div css={classes.homeButton}>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
      </button>
    </div>
  );
};

export default HomeButton;
