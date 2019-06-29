import { POST_POINTS } from '../constants'

const initialstate = 0;

const points = (state = initialstate, action) => {
    switch (action.type) {
        
        case POST_POINTS:
        return action.payload;

        default:
            return state
    }
}

export default points;