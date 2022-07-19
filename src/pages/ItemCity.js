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
        {props.current?.condition.icon}
        <br />
        Condition: {props.current?.condition.text}
        <br />
        Country: {props.location?.country}
        <br />
        Region: {props.location?.region}
        <br />
        Localtime: "{props.location?.localtime}"
        <br />
        Cloud: {props.current?.cloud}
        <br />
        Temp C°: {props.current?.temp_c}
        <br />
        Direction du vent: {props.current?.wind_dir}
        <br />
        Vitesse du vent en Mph: {props.current?.wind_mph}
        <br />
        Humidité: {props.current?.humidity}
      </p>

      {/* {(props.locationt || []).map((item, i) => (
        <ul key={i}>
          {console.log("item", item)}
          <p>
            Cloud:
            <br />
            <br />
          </p>
        </ul>
      ))} */}
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
    current: state.getCity.results.current,
    location: state.getCity.results.location,
    Name: state.getName.name,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCity);
