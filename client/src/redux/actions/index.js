import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAILS_ID = "GET_COUNTRY_DETAILS_ID";
export const GET_COUNTRY_DETAILS_NAME = "GET_COUNTRY_DETAILS_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const SET_ERROR = "SET_ERROR"

export const getAllCountries = () => {
  return async dispatch => {
    try {
      const data = await axios.get("http://localhost:3001/countries");
      return dispatch({
        type: GET_ALL_COUNTRIES,
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

export const getCountryDetailId = (id) => {
  return async (dispatch) => {
    try {
        const data = await axios.get(`http://localhost:3001/countries/${id}`);
       // console.log(data.data)
        return dispatch({
          type: GET_COUNTRY_DETAILS_ID,
          payload: data.data[0],
        });
        
    } catch (error) {
        return dispatch({
            type: SET_ERROR,
            payload: true,
        })
    }
  };
};

export const getCountryName = (name)=>{
    return async dispatch =>{
        try {
            const data = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: GET_COUNTRY_DETAILS_NAME,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: SET_ERROR,
                payload: true
            })
        }
    }
}

export const postActivity = (data)=>{
    return async dispatch =>{
        try {
            const activity = await axios.post('http://localhost:3001/activities', data)
            return activity;
        } catch (error) {
            return dispatch({
                type: SET_ERROR,
                payload: true
            })
        }
    }
}