import {GAME_STARTED, SET_SCORE_PLAYER_ONE, SET_SCORE_PLAYER_TWO, SET_SECOND_PLAYER, SET_X_NEXT} from "../types";

const INITIAL_STATE = {
    gameStarted: false,
    scorePlayerOne: 0,
    scorePlayerTwo: 0,
    isXNext: true
}

const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GAME_STARTED:
            return {
                ...state, gameStarted: action.payload
            }
        case SET_SCORE_PLAYER_ONE:
            return {
                ...state, scorePlayerOne: action.payload
            }
        case SET_SCORE_PLAYER_TWO:
            return {
                ...state, scorePlayerTwo: action.payload
            }
        case SET_X_NEXT:
            return {
                ...state, isXNext: action.payload
            }


        default:
            return state;
    }
};

export {gameReducer};