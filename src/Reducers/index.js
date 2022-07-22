import { combineReducers } from "redux";
import { itemsHaveError, itemsAreLoading, getCity } from "./items";

export default combineReducers({
  itemsHaveError,
  itemsAreLoading,
  getCity,
});
