import { combineReducers } from 'redux';
import questions from './questions'
import points from './points'

export default combineReducers(
    {
        questions,
        points
    }
);