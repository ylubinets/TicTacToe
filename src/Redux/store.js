import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import formReducer from "./Reducers/formReducer"
import {gameReducer} from "./Reducers/gameReducer";


const rootReducer = combineReducers({
    form: formReducer,
    game: gameReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;