import { Link } from "react-router-dom";
import { itemsFetchData, nameFetchData } from "../Actions/items";
import "./SearchBar.css";
import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <div className="container">
          <div id="content">
            <div className="input-group">
              <h1 className="title"> Bienvenue sur votre page Méteo</h1>
              <input
                type="text"
                value={enteredSearch}
                className="form-control search-form"
                id="search"
                onChange={CityChangeHandler}
                placeholder="Search .."
              />
              <span class="input-group-btn" style={{ width: "39px" }} />
              <Link to={`/ItemCity/${enteredSearch}`}>
                <button
                  id="search-this"
                  className="pull-right btn btn-default search-btn"
                  type="submit"
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
          </div>
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
