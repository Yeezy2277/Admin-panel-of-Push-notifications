import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import LoginReducer from "./LoginReducer";
import PushReducer from "./PushReducer";

let reducers = combineReducers({
    form: formReducer,
    login: LoginReducer,
    push: PushReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)))
window.__store__ = store
export default store