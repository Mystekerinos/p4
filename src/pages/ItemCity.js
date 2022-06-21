import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./ItemCity.module.css";

import { getDataLyrics, getItemData } from "../Actions/items";
import { itemsFirstFetchData } from "../Actions/items";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemCity(props) {
  console.log("Props.itemlist", props);
  const { enteredSearch } = useParams();
  useEffect(() => {
    if (props.items === undefined) {
      console.log("ItemList.artist", enteredSearch);
      props.firstFetchData(
        `https://itunes.apple.com/search?term= ${enteredSearch}&media=music&entity=musicTrack`
      );
    }
  }, [enteredSearch]);

  if (props.hasError) {
    return (
      <h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        Sorry! no City found
      </h2>
    );
  }

  if (props.isLoading) {
    return (
      <h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        Loading…
      </h2>
    );
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className={classes.titleArtist}>{props.name}</h1>

      {props.city}
    </div>
  );
}

ItemCity.propTypes = {
  firstFetchData: PropTypes.func.isRequired,
  city: PropTypes.array.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    city: state.getSong.results,

    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getLyrics: (url) => dispatch(getDataLyrics(url)),

    getItem: (song) => dispatch(getItemData(song)),
    firstFetchData: (url) => dispatch(itemsFirstFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCity);
