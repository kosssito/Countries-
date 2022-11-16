import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAILS_ID = "GET_COUNTRY_DETAILS_ID";
export const GET_COUNTRY_DETAILS_NAME = "GET_COUNTRY_DETAILS_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const SET_ERROR = "SET_ERROR";
export const CLEAN_COUNTRY = "CLEAN_COUNTRY";
export const CLEAN_FIND = "CLEAN_FIND";
export const CLEAN_ACTIVITY_FIND = "CLEAN_ACTIVITY_FIND";
export const SEARCH_COUNTRY_FOR_ACTIVITY = "SEARCH_COUNTRY_FOR_ACTIVITY";

export const getAllCountries = (continet = "default", filter = "default") => {
  return async (dispatch) => {
    try {
      const data = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: { data: data.data, continet, filter },
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
      const data = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAILS_ID,
        payload: data.data[0],
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
      const data = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_DETAILS_NAME,
        payload: data.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};

export const searchCountryForActivity = (name) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({
        type: SEARCH_COUNTRY_FOR_ACTIVITY,
        payload: data.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
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

export const cleanCountry = () => {
  return { type: CLEAN_COUNTRY };
};

export const cleanFind = () => {
  return { type: CLEAN_FIND };
};

export const cleanActiviyFind = () => {
  return { type: CLEAN_ACTIVITY_FIND };
};
