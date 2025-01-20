/** @jsxImportSource @emotion/react */
import SearchIcon from "@mui/icons-material/Search";
import classes from "../../style";

const SearchBar = () => {
  return (
    <div css={classes.searchBar}>
      <button>
        <SearchIcon />
      </button>
      <input placeholder="What do you want to play?" />
    </div>
  );
};

export default SearchBar;
