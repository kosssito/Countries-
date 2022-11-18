import {
  CLEAN_COUNTRY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS_ID,
  GET_COUNTRY_DETAILS_NAME,
  POST_ACTIVITY,
  CLEAN_FIND,
  CLEAN_ACTIVITY_SEARCHER,
  SEARCH_COUNTRY_FOR_ACTIVITY,
  GET_ACTIVITY
} from "../actions";

const initialState = {
  pages: [],
  activtySearcher: [],
  country: {},
  find: [],
  error: '',
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      const functionContinetFilter = (continet) => {
        if (continet === "default") return action.payload.data;
        return [...action.payload.data].filter(
          (c) => c.continent === continet // 'nort merica', 'afica'
        );
      };
      const data = functionContinetFilter(action.payload.continet);
      const functionPages = (arr) => {
        //                     0             1
        //ArrPages =  [ [c1,c2,c3...c9],[c10,c11... c19] ,    ]
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
          pages: functionPages(data),
        };
      }
      //ABC
      if (action.payload.filter === "abc") {
        const abc = [...data].sort((a, b) => a.name.localeCompare(b.name));
        return {
          ...state,
          pages: functionPages(abc),
        };
      }
      //ZYX
      if (action.payload.filter === "zyx") {
        const zyx = [...data].sort((b, a) => a.name.localeCompare(b.name));
        return {
          ...state,
          pages: functionPages(zyx),
        };
      }
      //pop highest
      if (action.payload.filter === "highest") {
        const highest = [...data].sort((b, a) => a.population - b.population);
        return {
          ...state,
          pages: functionPages(highest),
        };
      }
      //pop lowest
      if (action.payload.filter === "lowest") {
        const lowest = [...data].sort((a, b) => a.population - b.population);
        return {
          ...state,
          pages: functionPages(lowest),
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
    case SEARCH_COUNTRY_FOR_ACTIVITY:
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
      return{
        ...state,
        activities: action.payload,
      }

    default:
      return state;
  }
};

export default rootReducer;
