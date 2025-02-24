/** @jsxImportSource @emotion/react */
import HomeButton from "./Components/HomeButton/HomeButton";
import SearchBar from "./Components/SearchBar/SearchBar";
import ThreeDots from "./Components/ThreeDots/ThreeDots";
import classes from "./style";

const TopBar = () => {
  return (
    <div css={classes.topBar}>
      <div css={classes.left}>
        <ThreeDots />
      </div>

      <div css={classes.center}>
        <HomeButton />
        <SearchBar />
      </div>

      <div css={classes.right}>dark-light * friends * profile</div>
    </div>
  );
};

export default TopBar;
