import { FETCH_QUESTIONS, CONTINENTS } from '../constants'

const initialstate = [];


const shuffleQuestions = (array) => {
    //Shuffle fetched array
    const shuffled = array.sort(() => 0.5 - Math.random());

    // Get sub-array of first 5 elements after shuffled
    return shuffled.slice(0, 5);
}

const appendWrongAnswers = (array) => {
    array.forEach(element => {
       
        const filteredContinents =

        // remove correct answer
         CONTINENTS.filter((continent) => continent !== element.continent)

         //shuffle remaining answers
         .sort(() => 0.5 - Math.random())

         // hold only two of remaining answers
         .slice(0, 2);

         // append the righ answer with the wrong ones
         filteredContinents.push(element.continent);

         // shuffle so the right answer won't be the necessarily last in the array
         filteredContinents.sort(() => 0.5 - Math.random());

         element.answers = filteredContinents;
         
    });
    return array;
}

const questions = (state = initialstate, action) => {
    switch (action.type) {

        case FETCH_QUESTIONS:
            const shuffledPayload = shuffleQuestions([...action.payload]);
            return appendWrongAnswers(shuffledPayload);

        default:
            return state
    }
}

export default questions;