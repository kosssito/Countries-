import {
  CLEAN_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS_ID,
  GET_COUNTRY_DETAILS_NAME,
  POST_ACTIVITY,
  CLEAN_FIND
} from "../actions";

const initialState = {
  countries: [],
  country: {},
  find: [],
  
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
        return{
          ...state,
          find:[]
        }

    default:
      return state;
  }
};

export default rootReducer;
