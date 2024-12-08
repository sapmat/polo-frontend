import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <button>
        <SearchIcon />
      </button>
      <input placeholder="What do you want to play?" />
    </div>
  );
};

export default SearchBar;
