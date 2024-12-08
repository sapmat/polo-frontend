import HomeButton from "./Components/HomeButton/HomeButton";
import SearchBar from "./Components/SearchBar/SearchBar";
import ThreeDots from "./Components/ThreeDots/ThreeDots";
import "./style.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left">
        <ThreeDots />
      </div>

      <div className="center">
        <HomeButton />
        <SearchBar />
      </div>

      <div className="right">dark-light * profile</div>
    </div>
  );
};

export default TopBar;
