import { ITEMS_FETCH_DATA_SUCCESS } from "../Actions/items";
import { ITEMS_FIRST_FETCH_DATA_SUCCESS } from "../Actions/items";
import { GET_SONG } from "../Actions/items";
import { GET_NAME } from "../Actions/items";

import { ITEMS_GET_DATA_SUCCESS_LYRICS } from "../Actions/items";

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

export function itemsLyrics(state = { lyrics: "" }, action) {
  console.log("lyrics.action", action);
  switch (action.type) {
    case ITEMS_GET_DATA_SUCCESS_LYRICS:
      console.log("action.lyrics", action.lyrics);
      return action.lyrics;

    default:
      return state;
  }
}

export function getSong(
  state = {
    song: "",
    results: [],
    name: "",
    firstPreviewUrl: [],
    firstResults: [],
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case GET_SONG:
      console.log("song", action.song);
      return action.song;
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.results;
    case ITEMS_FIRST_FETCH_DATA_SUCCESS:
      console.log("firstResults", action.firstResults);
      return { ...state, firstResults: action.firstResults };
    case GET_SONG:
      console.log("firstPreviewUrl", action.firstPreviewUrl);
      return { ...state, firstPreviewUrl: action.firstPreviewUrl };
    case GET_NAME:
      console.log("name", action.name);
      return { ...state, name: action.name };

    default:
      return state;
  }
}
