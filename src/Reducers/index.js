import { combineReducers } from "redux";
import { itemsHaveError, itemsAreLoading, getCity, getName } from "./items";

export default combineReducers({
  itemsHaveError,
  itemsAreLoading,
  getCity,
  getName,
});
