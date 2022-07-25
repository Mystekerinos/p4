import { Link } from "react-router-dom";
import { itemsFetchData, nameFetchData } from "../Actions/items";

import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./SearchBarItemCity.module.css";

const SearchBarItemCity = (props) => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);

  const CityChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
    console.log("SearchBarItemCity.event.target.value", event.target.value);
    setFormIsValid(event.target.value.trim().length > 3);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor="header-search">
          <span className="classes visually-hidden"></span>
        </label>
        <div className={classes.searchBox}>
          <input
            type="text"
            value={enteredSearch}
            id="search"
            className={classes.inputSearch}
            onChange={CityChangeHandler}
            placeholder="Search City. . ."
          ></input>

          <Link to={`/ItemCity/${enteredSearch}`}>
            <button
              className={classes.btnSearch}
              disabled={!formIsValid}
              onClick={() => {
                props.fetchData(
                  ` https://api.openweathermap.org/data/2.5/weather?q=${enteredSearch}&appid=72764d37fc4792a2cf79d9d399c90a1a&lang=fr`
                );
                props.fetchName(enteredSearch);
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

SearchBarItemCity.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarItemCity);
