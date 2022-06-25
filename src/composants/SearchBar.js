import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const CityChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
    console.log(event.target.value);
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

        <button type="submit" onClick={() => {}}>
          Search
        </button>
        <input
          type="text"
          value={enteredSearch}
          onChange={CityChangeHandler}
          placeholder="Search blog posts"
        ></input>
      </form>
    </section>
  );
};

export default SearchBar;
