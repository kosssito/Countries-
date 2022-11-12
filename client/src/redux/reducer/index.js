import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS_ID,
  GET_COUNTRY_DETAILS_NAME,
  POST_ACTIVITY,
} from "../actions";

const initialState = {
  countries:[],
  country: {},

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_DETAILS_ID:
      return {
        ...state,
        country: action.payload,
      };
    case GET_COUNTRY_DETAILS_NAME:
      return {
        ...state,
        country: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
