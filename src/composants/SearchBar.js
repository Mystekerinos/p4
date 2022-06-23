import "./SearchBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const CityChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredSearch(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="header-search">
        <span className="visually-hidden"></span>
      </label>
      <Link to={`/ItemCity/${enteredSearch}`}>
        <input
          type="text"
          id="header-search"
          onChange={CityChangeHandler}
          placeholder="Search blog posts"
          name="s"
        />
        <button type="submit">Search</button>
      </Link>
    </form>
  );
};

export default SearchBar;
