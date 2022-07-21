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
      <h1> {props.Name}</h1>
      <br />
      <br />
      <br />

      <p>
        <img
          src={`http://openweathermap.org/img/wn/${props.weather?.[0].icon}@2x.png`}
          alt=""
        />
        <br />
        Base: "{props.base}"
        <br />
        Description: "{props.weather?.[0].description}"
        <br />
        Country: "{props.sys?.country}"
        <br />
        Cloud: {props.clouds?.all}
        <br />
        Temp C°: {props.main?.temp}
        <br />
        Vitesse du vent en Mph: {props.wind?.speed}
        <br />
        Humidité en %: {props.main?.humidity}
        <br />
        Pression en Pascal: {props.main?.pressure}
      </p>
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
    icon: state.getCity.results.weather,
    weather: state.getCity.results.weather,
    sys: state.getCity.results.sys,
    wind: state.getCity.results.wind,
    clouds: state.getCity.results.clouds,
    base: state.getCity.results.base,
    main: state.getCity.results.main,
    Name: state.getName.name,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCity);
