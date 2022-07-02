import { Link } from "react-router-dom";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const CityChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
    console.log("SearchBar.event.target.value", event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor="header-search">
          <span className="visually-hidden"></span>
        </label>
        <div className="button">
          <input
            type="text"
            value={enteredSearch}
            id="search"
            onChange={CityChangeHandler}
            placeholder="Search blog posts"
          ></input>
          <Link to="/ItemCity">
            <button type="submit" onClick={() => {}}>
              Search
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
