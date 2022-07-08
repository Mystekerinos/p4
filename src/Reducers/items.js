import { ITEMS_FETCH_DATA_SUCCESS } from "../Actions/items";
import { ITEMS_FIRST_FETCH_DATA_SUCCESS } from "../Actions/items";

import { GET_NAME } from "../Actions/items";

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
    name: "",
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.results;
    case ITEMS_FIRST_FETCH_DATA_SUCCESS:
      console.log("firstResults", action.firstResults);
      return { ...state, firstResults: action.firstResults };

    case GET_NAME:
      console.log("name", action.name);
      return { ...state, name: action.name };

    default:
      return state;
  }
}
