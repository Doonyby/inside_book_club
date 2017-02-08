import homeReducer from "./home-reducer";
import myClubReducer from "./my-club-reducer";
import joinClubReducer from "./join-club-reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ homeReducer, myClubReducer, joinClubReducer });

export default rootReducer;
