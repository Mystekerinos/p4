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
      <br />
      <br />
      Condition: {props.condition.text} <br />
      {props.condition.icon} <br />
      Country: {props.country} <br />
      Region: {props.region} <br />
      lat: {props.lat}
      <br />
      localtime: "{props.localtime}"
      <br />
      cloud: {props.cloud}
      <br />
      temperature: {props.temp_c} <br />
      direction du vent: {props.wind_dir} <br />
      vitesse du vent: {props.wind_mph} <br />
      Humidité: {props.humidity} <br />
    </div>
  );
};

ItemCity.propTypes = {
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    country: state.getCity.location.country,
    region: state.getCity.location.region,
    lat: state.getCity.location.lat,
    localtime: state.getCity.location.localtime,
    cloud: state.getCity.current.cloud,
    temp_c: state.getCity.current.temp_c,
    wind_dir: state.getCity.current.wind_dir,
    wind_mph: state.getCity.current.wind_mph,
    humidity: state.getCity.current.humidity,
    condition: state.getCity.current.condition,
    name: state.getName.name,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCity);
