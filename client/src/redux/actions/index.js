import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAILS_ID = "GET_COUNTRY_DETAILS_ID";
export const GET_COUNTRY_DETAILS_NAME = "GET_COUNTRY_DETAILS_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const SET_ERROR = "SET_ERROR";
export const CLEAN_ERROR = "CLEAN_ERROR";
export const CLEAN_COUNTRY = "CLEAN_COUNTRY";
export const CLEAN_FIND = "CLEAN_FIND";
export const CLEAN_ACTIVITY_SEARCHER = "CLEAN_ACTIVITY_SEARCHER";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const GET_ACTIVITY = "GET_ACTIVITY";

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: result.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};

export const getCountryDetailId = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAILS_ID,
        payload: result.data[0],
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};

export const getCountryName = (name) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_DETAILS_NAME,
        payload: result.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};

export const searchCountry = (name) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: SEARCH_COUNTRY,
        payload: result.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};
export const cleanActiviySearcher = () => {
  return { type: CLEAN_ACTIVITY_SEARCHER };
};

export const postActivity = (data) => {
  return async (dispatch) => {
    try {
      const activity = await axios.post(
        "http://localhost:3001/activities",
        data
      );
      return activity;
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};

export const getActivity = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("http://localhost:3001/activities");
      return dispatch({
        type: GET_ACTIVITY,
        payload: result.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};

export const cleanCountry = () => {
  return { type: CLEAN_COUNTRY };
};

export const cleanFind = () => {
  return { type: CLEAN_FIND };
};

export const clenError = ()=>{
  return { type: CLEAN_ERROR };
}