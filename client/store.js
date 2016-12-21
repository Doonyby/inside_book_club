import { redux, combineReducers, createStore, applyMiddleware, compose } from 'redux'
import homeReducer from "./reducers/home-reducer";
import myClubReducer from "./reducers/my-club-reducer";
import joinClubReducer from "./reducers/join-club-reducer";
import thunk from "redux-thunk";


const reducers = combineReducers({ homeReducer, myClubReducer, joinClubReducer })

const store = createStore(reducers, compose (
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
console.log("store", store.getState());

export default store;