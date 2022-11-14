import {
  CLEAN_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS_ID,
  GET_COUNTRY_DETAILS_NAME,
  POST_ACTIVITY,
  CLEAN_FIND,
} from "../actions";

const initialState = {
  countries: [],
  country: {},
  find: [],
  pages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      const functionPages = (arr) => {
        //              0             1
        //pages =  [ [c1,c2,c3...c9],[c10,c11... c19] ,    ]
        const ArrPages = [];
        let aux = [];
        const fistTeen = [...arr].splice(0, 9);
        ArrPages.push(fistTeen);
        const rest = [...arr].splice(9, arr.length - 1);

        rest.forEach((c, i) => {
          aux.push(c);
          if ((i + 1) % 10 === 0) {
            ArrPages.push(aux);
            aux = [];
          }
          if (rest.length - 1 === i) ArrPages.push(aux);
        });
        return ArrPages;
      };
      //Default
      if (action.payload.filter === "default") {
        return {
          ...state,
          countries: action.payload,
          pages: functionPages(action.payload.data),
        };
      }
      //ABC
      if (action.payload.filter === "abc") {
        const abc = [...action.payload.data].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          countries: action.payload,
          pages: functionPages(abc),
        };
      }
      //CBA
      if (action.payload.filter === "zyx") {
        const zyx = [...action.payload.data].sort((b, a) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          countries: action.payload,
          pages: functionPages(zyx),
        };
      }

      return 1;
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

    default:
      return state;
  }
};

export default rootReducer;
