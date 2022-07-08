import { Link } from "react-router-dom";
import { itemsFetchData, nameFetchData } from "../Actions/items";
import "./SearchBar.css";
import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SearchBar = (props) => {
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
          <Link to={`/ItemCity/${enteredSearch}`}>
            <button
              type="submit"
              onClick={() => {
                props.fetchData(
                  `https://api.weatherapi.com/v1/current.json?key= 9e4a50a27942493f9c2154652220407&q=London&aqi=no`
                );
                props.fetchName(enteredSearch);
              }}
            >
              Search
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

SearchBar.propTypes = {
  fetchName: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,

  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    name: state.getCity.current,
    results: state.getCity.location,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    fetchName: (name) => dispatch(nameFetchData(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
