import {
  API_URL,
  FETCH_QUESTIONS,
  POST_POINTS
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

export const postPoints = (points) => ({
  type: POST_POINTS,
  payload: points
});