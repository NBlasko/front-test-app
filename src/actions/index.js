import {
  API_URL,
  FETCH_QUESTIONS,
} from '../constants';
import axios from "axios";

export const fetchQuestions = () => dispatch => {

  axios(API_URL)
    .then((res) => {
      dispatch({
        type: FETCH_QUESTIONS,
        payload: res.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
}

