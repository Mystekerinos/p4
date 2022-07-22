import { ITEMS_FETCH_DATA_SUCCESS } from "../Actions/items";

import { GET_CITY } from "../Actions/items";

export function itemsHaveError(state = false, action) {
  switch (action.type) {
    case "ITEMS_HAVE_ERROR":
      return action.hasError;

    default:
      return state;
  }
}

export function itemsAreLoading(state = false, action) {
  switch (action.type) {
    case "ITEMS_ARE_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function getCity(
  state = {
    results: [],
    name: undefined,
  },
  action
) {
  console.log("results", action);
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      console.log("action.Results", action.results);
      return { ...state, results: action.results };

    case GET_CITY:
      console.log("name", action.name);
      return { ...state, name: action.name };

    default:
      return state;
  }
}
