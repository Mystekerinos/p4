import axios from "axios";

export const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";
export const ITEMS_FIRST_FETCH_DATA_SUCCESS = "ITEMS_FIRST_FETCH_DATA_SUCCESS";

export const GET_NAME = "GET_Name";

export function getName(string) {
  console.log("getName", string);
  return {
    type: GET_NAME,
    name: string,
  };
}

export function itemsHaveError(bool) {
  return {
    type: "ITEMS_HAVE_ERROR",
    hasError: bool,
  };
}

export function itemsAreLoading(bool) {
  return {
    type: "ITEMS_ARE_LOADING",
    isLoading: bool,
  };
}

export function itemsFetchDataSuccess(array) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    results: array,
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsAreLoading(true));

    axios
      .get(url)
      .then((response) => {
        console.log(response, response.status);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(itemsAreLoading(false));

        return response;
      })
      .then((response) => dispatch(itemsFetchDataSuccess(response.data)))

      .catch(() => dispatch(itemsHaveError(true)));
  };
}

// export function itemsFirstFetchData(url) {
//   return (dispatch) => {
//     dispatch(itemsAreLoading(true));

//     axios
//       .get(url)
//       .then((response) => {
//         console.log(response, response.status);
//         if (response.status !== 200) {
//           throw Error(response.statusText);
//         }

//         dispatch(itemsAreLoading(false));

//         return response;
//       })
//       .then((response) => dispatch(itemsFetchDataSuccess(response.data)))

//       .catch(() => dispatch(itemsHaveError(true)));
//   };
// }

export function nameFetchData(name) {
  return (dispatch) => {
    dispatch(getName(name));
  };
}
