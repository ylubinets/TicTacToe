import {SET_FIRST_PLAYER, SET_SECOND_PLAYER} from "../types";

const INITIAL_STATE = {
    firstPlayer: '',
    secondPlayer: ''
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_FIRST_PLAYER:
            return {
                ...state, firstPlayer: action.payload
            }

        case SET_SECOND_PLAYER:
            return {
                ...state, secondPlayer: action.payload
            }

        default:
            return state;
    }
}

export default formReducer;