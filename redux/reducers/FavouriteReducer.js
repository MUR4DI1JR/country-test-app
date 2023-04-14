import { combineReducers } from 'redux';

const initialState = {
    country: [],
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
            return {
                ...state.country,
                country: [...state.country, action.payload]
            }
        default:
            return state
    }
};

export default combineReducers({
    country: favouriteReducer
});