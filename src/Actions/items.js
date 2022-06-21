import axios from "axios";
export const ITEMS_GET_DATA_SUCCESS_LYRICS = "ITEMS_GET_DATA_SUCCESS_LYRICS";
export const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";
export const ITEMS_FIRST_FETCH_DATA_SUCCESS = "ITEMS_FIRST_FETCH_DATA_SUCCESS";
export const ITEMS_FIRST_FETCH_PREVIEWURL_SUCCESS =
  "ITEMS_FIRST_FETCH_PREVIEWURL_SUCCESS";
export const GET_SONG = "GET_Song";
export const GET_NAME = "GET_Name";

export function getName(string) {
  console.log("getName", string);
  return {
    type: GET_NAME,
    name: string,
  };
}

export function getSong(string) {
  console.log("getSong", string);
  return {
    type: GET_SONG,
    song: string,
  };
}

export function getItemDataSuccessLyrics(string) {
  console.log("array", string);
  return {
    type: ITEMS_GET_DATA_SUCCESS_LYRICS,
    lyrics: string,
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

export function itemsFirstFetchDataSuccess(array) {
  return {
    type: ITEMS_FIRST_FETCH_DATA_SUCCESS,
    firstResults: array,
  };
}

export function itemsFirstFetchPreviewUrlSuccess(array) {
  return {
    type: ITEMS_FIRST_FETCH_PREVIEWURL_SUCCESS,
    firstPreviewUrl: array,
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

export function itemsFirstFetchData(url) {
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

export function getItemData(song) {
  return (dispatch) => {
    dispatch(getSong(song));
  };
}

export function itemsFirstFetchPreviewUrl(url) {
  return (dispatch) => {
    dispatch(itemsAreLoading(true));

    axios
      .get(url)
      .then((response) => {
        console.log("aaaaaaaaaa", response, response.status);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(itemsAreLoading(false));

        return response;
      })
      .then((response) => dispatch(getSong(response.data.results[0])))

      .catch(() => dispatch(itemsHaveError(true)));
  };
}

export function nameFetchData(name) {
  return (dispatch) => {
    dispatch(getName(name));
  };
}

export function getDataLyrics(props) {
  return (dispatch) => {
    dispatch(itemsAreLoading(true));

    axios
      .get(`https://api.lyrics.ovh/v1/${props.artistName}/${props.trackName}`)
      .then((response) => {
        console.log(response, response.status);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(itemsAreLoading(false));

        return response;
      })
      .then((response) => dispatch(getItemDataSuccessLyrics(response.data)))

      .catch(() => dispatch(itemsHaveError(true)));
  };
}

export function firstItemsGetDataLyrics(url) {
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
      .then((response) => dispatch(getItemDataSuccessLyrics(response.data)))

      .catch(() => dispatch(itemsHaveError(true)));
  };
}
