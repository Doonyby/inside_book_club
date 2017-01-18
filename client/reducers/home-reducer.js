import action from "../actions/landing-actions.js";
import {REHYDRATE} from 'redux-persist/constants';

let initialState = {
	name: '',
	username: '',
	email: '',
	id: '',
  myClub: '',
  joinedClub: '',
  error: null,
  myClubError: null,
  joinedClubError: null
}

export default function homeReducer(state = initialState, action) {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      nextState.name = action.userData.name;
      nextState.username = action.userData.username;
      nextState.email = action.userData.email;
      nextState.id = action.userData._id;
      nextState.myClub = action.userData.myClub;
      nextState.joinedClub = action.userData.joinedClub;
      nextState.error = null;
      nextState.myClubError = null;
      nextState.joinedClubError = null;
      return nextState;
    case 'SIGN_UP_REQUEST_ERROR':
      nextState.error = action.message;
      return nextState;
    case 'LOGIN_REQUEST_ERROR':
      nextState.error = action.message;
    case 'SUBMIT_NEW_MYCLUB_SUCCESS':
      nextState.myClub = action.myClubName;
      nextState.myClubError = null;
      return nextState;
    case 'SUBMIT_NEW_MYCLUB_ERROR':
      nextState.myClubError = action.message;
    default:
      return nextState;
  }
  return nextState
}
