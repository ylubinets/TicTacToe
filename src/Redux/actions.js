import {
    SET_SECOND_PLAYER,
    SET_FIRST_PLAYER,
    GAME_STARTED,
    SET_SCORE_PLAYER_ONE,
    SET_SCORE_PLAYER_TWO, SET_X_NEXT
} from "./types";


export const setFirstPlayer = (data) => (dispatch) => {
    dispatch({type: SET_FIRST_PLAYER, payload: data})
}

export const setSecondPlayer = (data) => (dispatch) => {
    dispatch({type: SET_SECOND_PLAYER, payload: data})
}

export const setGame = () => (dispatch) => {
    dispatch({type: GAME_STARTED, payload: true})
}

export const setScorePlayerOne = (data) => (dispatch) => {
    dispatch({type: SET_SCORE_PLAYER_ONE, payload: data})
}

export const setScorePlayerTwo = (data) => (dispatch) => {
    dispatch({type: SET_SCORE_PLAYER_TWO, payload: data})
}

export const setXNext = (data) => (dispatch) => {
    dispatch({type: SET_X_NEXT, payload: data})
}
