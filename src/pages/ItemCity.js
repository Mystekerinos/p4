import { connect } from "react-redux";

import PropTypes from "prop-types";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

const ItemCity = (props, country) => {
  console.log("ItemCity.props", props);
  // const { name } = useParams();

  // useEffect(() => {
  //   // console.log("aaaaaaa", props.results === undefined);
  //   // if (props.results === undefined) {
  //     console.log("UrlState", name);
  //   }
  // // }, [name]);

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

      {props.results.location.country}
    </div>
  );
};

ItemCity.propTypes = {
  results: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    results: state.getCity,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCity);
