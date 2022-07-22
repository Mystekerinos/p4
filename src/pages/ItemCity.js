import { connect } from "react-redux";

import PropTypes from "prop-types";
import { firstItemsGetDataName } from "../Actions/items";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemCity = (props) => {
  console.log("ItemCity.props", props);

  const { enteredSearch } = useParams();

  useEffect(() => {
    console.log(
      "useEffect",
      props.Name === undefined ||
        props.weather?.[0].icon === undefined ||
        props.base === undefined ||
        props.sys?.country === undefined ||
        props.weather?.[0].description ||
        props.wind?.speed === undefined ||
        props.clouds?.all === undefined ||
        props.base === undefined ||
        props.main?.temp === undefined ||
        props.wind?.speed === undefined ||
        props.main?.humidity === undefined ||
        props.main?.pressure === undefined,
      props.Name,
      props.weather?.[0].icon,
      props.weather?.[0].description,
      props.sys?.country,
      props.wind?.speed,
      props.clouds?.all,
      props.base,
      props.main?.temp,
      props.wind?.speed,
      props.main?.humidity,
      props.main?.pressure
    );
    if (
      props.Name === undefined ||
      props.weather?.[0].icon === undefined ||
      props.base === undefined ||
      props.sys?.country === undefined ||
      props.weather?.[0].description ||
      props.wind?.speed === undefined ||
      props.clouds?.all === undefined ||
      props.base === undefined ||
      props.main?.temp === undefined ||
      props.wind?.speed === undefined ||
      props.main?.humidity === undefined ||
      props.main?.pressure === undefined
    ) {
      console.log("UrlState", enteredSearch);
      props.firstName(
        ` https://api.openweathermap.org/data/2.5/weather?q=${enteredSearch}&appid=72764d37fc4792a2cf79d9d399c90a1a`
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
    Name: state.getCity.name,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    firstName: (url) => dispatch(firstItemsGetDataName(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCity);
