import { redux, combineReducers, createStore, applyMiddleware, compose } from 'redux'
import homeReducer from "./reducers/home-reducer";
import myClubReducer from "./reducers/my-club-reducer";
import joinClubReducer from "./reducers/join-club-reducer";
import thunk from "redux-thunk";
import {persistStore, autoRehydrate} from 'redux-persist';


const reducers = combineReducers({ homeReducer, myClubReducer, joinClubReducer })

const store = createStore(reducers, undefined, compose (
		applyMiddleware(thunk), autoRehydrate()
	))
persistStore(store).purge()

export default store;