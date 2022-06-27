import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const CityChangeHandler = (event) => {
    console.log(event.target.value);
    const CityName = event.target.value;
    console.log(CityName);
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
        <Link to="/ItemCity">
          <div className="button">
            <button type="submi" onClick={() => {}}>
              Search
            </button>
            <input
              type="text"
              onChange={CityChangeHandler}
              placeholder="Search blog posts"
            ></input>
          </div>
        </Link>
      </form>
    </section>
  );
};

export default SearchBar;
