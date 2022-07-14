import { connect } from "react-redux";

import PropTypes from "prop-types";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

const ItemCity = (props) => {
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
      <h1> {props.name}</h1>
      <br />
      {/* {props.results.current.condition.icon}
      <br />
      {props.results.current.condition.text} */}
      <br />
      <br />
      Country: {props.results.location.country} <br />
      Region: {props.results.location.region} <br />
      lat:{props.results.location.lat}
      <br />
      localtime: {props.results.location.localtime}
      <br />
      cloud: {props.results.current.cloud}
      <br />
      temperature: {props.results.current.temp_c} <br />
      direction du vent: {props.results.current.wind_dir} <br />
      vitesse du vent: {props.results.current.wind_mph} <br />
      Humidité: {props.results.current.humidity} <br />
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
    name: state.getName.name,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCity);
