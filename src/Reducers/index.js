import { combineReducers } from "redux";
import { itemsHaveError, itemsAreLoading, itemsLyrics, getSong } from "./items";

export default combineReducers({
  itemsHaveError,
  itemsAreLoading,
  getSong,
  itemsLyrics,
});
