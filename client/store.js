import { redux, combineReducers, createStore, applyMiddleware, compose } from 'redux'
import landingReducer from "./reducers/landing-reducer";
import userReducer from "./reducers/user-reducer";
import thunk from "redux-thunk";


const reducers = combineReducers({ landingReducer, userReducer})

const store = createStore(reducers, compose (
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
console.log("store", store.getState());

export default store;