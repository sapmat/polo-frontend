/** @jsxImportSource @emotion/react */
import HomeButton from "./Components/HomeButton/HomeButton";
import SearchBar from "./Components/SearchBar/SearchBar";
import ThreeDots from "./Components/ThreeDots/ThreeDots";
import classes from "./style";

const TopBar = () => {
  return (
    <div css={classes.topBar}>
      <div>
        <ThreeDots />
      </div>

      <div css={classes.center}>
        <HomeButton />
        <SearchBar />
      </div>

      <div>dark-light * profile</div>
    </div>
  );
};

export default TopBar;
