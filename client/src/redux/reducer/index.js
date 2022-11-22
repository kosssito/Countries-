import {
  CLEAN_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS_ID,
  GET_COUNTRY_DETAILS_NAME,
  POST_ACTIVITY,
  CLEAN_FIND,
  CLEAN_ACTIVITY_SEARCHER,
  SEARCH_COUNTRY,
  GET_ACTIVITY,
  SET_ERROR,
  CLEAN_ERROR,
} from "../actions";

const initialState = {
  allCountries: [],
  pages: [],
  activtySearcher: [],
  country: {},
  find: [],
  error: false,
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
      };

    case GET_COUNTRY_DETAILS_ID:
      return {
        ...state,
        country: action.payload,
      };
    case GET_COUNTRY_DETAILS_NAME:
      return {
        ...state,
        find: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case CLEAN_COUNTRY:
      return {
        ...state,
        country: {},
      };
    case CLEAN_FIND:
      return {
        ...state,
        find: [],
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        activtySearcher: action.payload,
      };
    case CLEAN_ACTIVITY_SEARCHER:
      return {
        ...state,
        activtySearcher: [],
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    case CLEAN_ERROR:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
